from collections import deque

# Person needed to be found


def person_is_found(name):
    return name == 'jonny'

# BFS realization


def bfs(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if person_is_found(person):
                print(person + " is found")
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    print('Seller is not found')
    return False


graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

bfs("you")
