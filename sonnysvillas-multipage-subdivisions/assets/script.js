
document.addEventListener('DOMContentLoaded',()=>{
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const lines = [
        'Name: ' + (data.get('name')||''),
        'Email: ' + (data.get('from')||''),
        'Check-in: ' + (data.get('checkin')||''),
        'Check-out: ' + (data.get('checkout')||''),
        'Guests: ' + (data.get('guests')||''),
        '',
        (data.get('message')||'')
      ];
      const body = encodeURIComponent(lines.join('\n'));
      const subject = encodeURIComponent("Inquiry from Sonny's Villas website");
      const mailto = 'mailto:sonnysvillas@gmail.com?subject=' + subject + '&body=' + body;
      window.location.href = mailto;
    });
  }
});
