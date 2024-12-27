// write a function that generates a random alphanumeric string of length 4 to append at the end of an image name, e.g. 'image-name-3f5g'.

export function generateRandomString(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}