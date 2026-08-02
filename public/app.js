const copyButton = document.querySelector("button");

const copyTarget = 'HHjkVcVV59uMZSXhCmhAX16ugH49DZWDFBoLHLYXvqtG';

copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(copyTarget);
        alert('COPIED');
    } catch {
        alert('FAILED');
    }
});
