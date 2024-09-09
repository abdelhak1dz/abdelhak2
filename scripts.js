function showLoadingScreen() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function showSecondModal(event) {
    event.preventDefault();
    closeModal();
    document.getElementById('mySecondModal').style.display = 'block';
}

function closeSecondModal() {
    document.getElementById('mySecondModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
    if (event.target == document.getElementById('mySecondModal')) {
        closeSecondModal();
    }
}
