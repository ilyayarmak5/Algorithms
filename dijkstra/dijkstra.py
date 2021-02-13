# Graph Initialization
graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2
graph["a"] = {}
graph["a"]["fin"] = 1
graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5
graph["fin"] = {}

# Costs dictionary
inifinity = float("inf")
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = inifinity

# Parents dictionary
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

processed = []

# Find lowest cost


def find_lowest_cost_node(costs):
    lowest_cost = float("inf")
    lowest_cost_node = None
    for node in costs:
        cost = costs[node]
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node
    return lowest_cost_node


# Algorithm realization
def dijkstra():
    node = find_lowest_cost_node(costs)
    while node is not None:
        cost = costs[node]
        neighbours = graph[node]
        for n in neighbours.keys():
            new_cost = cost + neighbours[n]
            if costs[n] > new_cost:
                costs[n] = new_cost
                parents[n] = node
        processed.append(node)
        node = find_lowest_cost_node(costs)
    return costs["fin"]


print(dijkstra())
