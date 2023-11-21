function greating(name: string | null | undefined) {
    if (name) {
        console.log('Hello ' + name);
    } else {
        console.log('Hello');
    }
}

greating(null);