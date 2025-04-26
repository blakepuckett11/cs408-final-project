window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
function sayHello() {
    return 'hello';
}

document.getElementById('score-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;

    // Generate a unique ID (name + timestamp)
    const id = `${name}-${Date.now()}`;
  
    try {
      const response = await fetch('https://s2ppqtzcr5.execute-api.us-east-2.amazonaws.com/items', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name, score })
      });
  
      const data = await response.json();
      document.getElementById('response-message').innerText = data.message || 'Score submitted!';
    } catch (error) {
      document.getElementById('response-message').innerText = 'Error submitting score.';
      console.error(error);
    }
});
