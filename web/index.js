window.addEventListener('load', () => {
    document.getElementById('submit-grade').addEventListener('click', () => {
        finishTestSCROM(document.getElementById('grade-input').value);
    })
})