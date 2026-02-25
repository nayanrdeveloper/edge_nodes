# VectorShift Pipeline Builder 🚀

A modern, highly interactive node-based flow editor for building and visualizing complex Data Pipelines and Directed Acyclic Graphs (DAGs). 

This project was built with **React**, **React Flow**, **Zustand**, and **Tailwind CSS** on the frontend, powered by a **FastAPI** backend that calculates pipeline statistics and runs topological sorting algorithms.

---

## 🏗️ Architecture & Engineering Decisions

As the codebase scales, strict modularity and separation of concerns become critical. Several architectural refactors were made to ensure this project remains clean, readable, and highly maintainable:

1. **Strict Dependency Extraction (`apiConstants.js` & `nodeConstants.js`)**
   - Hardcoded strings, UI text, handles, and URLs clutter components and make internationalization (i18n) difficult. 
   - All static data was extracted into a central `constants/` directory. If the API URL or a node label ever changes, it only needs to be updated in one place.
2. **Component Reusability (`FormElements.js`, `<Spinner />`)**
   - Repeating identical generic Tailwind classes across multiple nodes violates the DRY principle. 
   - We abstracted generic components like labels, selects, auto-resizing textareas, and loaders into a single source of truth.
3. **API Service Layer Abstracting (`services/api.js`)**
   - The `<SubmitButton />` should not be responsible for executing native Javascript `fetch()` requests and building `FormData`.
   - The network logic was abstracted into a dedicated service layer, allowing the UI to purely handle state and presentation.
4. **Utility Class Styling (Tailwind CSS)**
   - All inline `style={{...}}` properties were ripped out and replaced with strict Tailwind utility classes. This drastically reduced the DOM size and standardized spacing and colors (`indigo-600`, `slate-50`).

---

## 🧠 Backend Math Logic

When a user submits their pipeline to the backend, the system doesn't just count the nodes and edges; it performs a mathematical diagnosis to ensure the pipeline is a valid **Directed Acyclic Graph (DAG)**. 

A DAG asserts that data flows strictly in one direction and never loops back on itself (which would cause infinite recursion in a data pipeline).

To verify this, the backend utilizes **Kahn's Algorithm for Topological Sorting**:
1. **In-Degree Calculation:** First, the API iterates over all edges and maps an `in-degree` integer (number of incoming arrows) to every Node.
2. **The Queue:** It isolates all nodes with an `in-degree` of exactly `0` (Source Nodes) and pushes them into an execution queue.
3. **The Traversal:** It pops a node from the queue, increments the "visited" counter, and "removes" the node's outbound edges by subtracting `1` from the `in-degree` of all its neighbors.
4. **Queue Propagation:** If a neighbor's `in-degree` hits `0`, it is pushed into the queue.
5. **Validation:** If the final `visited_count` precisely equals the `num_nodes`, the graph is perfectly acyclic (`is_dag: true`). If they differ, an impossible cyclic dependency exists (`is_dag: false`).

---

## 🛠️ Tech Stack
* **Frontend:** React, React Flow, Zustand (State Management), Tailwind CSS, React Hot Toast
* **Backend:** Python 3.9+, FastAPI, Uvicorn
* **Tooling:** ESLint, Prettier

---

## ⚙️ Setup Instructions

### 1. Start the Backend Server
Open a terminal and navigate to the backend directory:
```bash
cd backend
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload
```
The FastAPI application will start running synchronously on `http://127.0.0.1:8000`.

### 2. Start the Frontend Application
Open a second terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
npm start
```
The React development server will mount on `http://localhost:3000`.

### 3. Usage
- Drag and drop nodes from the left-hand toolbar onto the canvas.
- Connect output handles (right) to input handles (left).
- Inside a **Text Node**, type variables enclosed in double curly braces (e.g., `{{ input_data }}`) to dynamically generate input handles on the fly!
- Click **"Submit Flow"** in the top right to analyze your DAG!
