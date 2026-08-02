const b = document.querySelector("button");

const A = 'HHjkVcVV59uMZSXhCmhAX16ugH49DZWDFBoLHLYXvqtG';

b.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(A);
        alert('COPIED');
    } catch {
        alert('FAILED');
    }
});
