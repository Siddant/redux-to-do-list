export function increment(lol) {
    return {
        type: 'increment_likes',
        payload: lol
    }
}


export function toggleList(todo) {
    return {
        type: 'toggle_todo',
        payload: todo
    }
}
