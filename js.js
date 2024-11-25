document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('info').classList.remove('hidden');
    document.querySelector('header').classList.add('hidden');
});

document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('info').classList.add('hidden');
    document.querySelector('header').classList.remove('hidden');
});
document.getElementById('cta-button'). addEventListener('click',function(){
    alert('Спасибо, идите нахуй');
})