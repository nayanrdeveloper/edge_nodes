from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        data = json.loads(pipeline)
        nodes = data.get('nodes', [])
        edges = data.get('edges', [])
    except json.JSONDecodeError:
        return {"error": "Invalid JSON format"}

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list and in-degrees
    adj = defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}

    for edge in edges:
        u = edge.get('source')
        v = edge.get('target')
        if u and v:
            adj[u].append(v)
            if v not in in_degree:
                in_degree[v] = 0
            in_degree[v] += 1

    # Topological sort (Kahn's Algorithm) to check if it's a DAG
    q = deque([node_id for node_id, deg in in_degree.items() if deg == 0])
    visited_count = 0

    while q:
        curr = q.popleft()
        visited_count += 1

        for neighbor in adj[curr]:
            if neighbor in in_degree:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    q.append(neighbor)

    is_dag = visited_count == num_nodes

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
