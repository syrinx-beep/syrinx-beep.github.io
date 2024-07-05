function hideStringInLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Example usage: Hide the string 'secret' under the key 'hiddenMessage'
hideStringInLocalStorage('hiddenMessage', 'secret');