const testimonialsData = [
    { 
        name: 'Jack', 
        text: 'This is some Jack review about some purchase he recently made and completely satisfied. He will recommend it to his friends.' 
    },
    { 
        name: 'John', 
        text: 'This is some John review about some purchase he recently made and almost satisfied. Probably he will buy it again.' 
    },
    { 
        name: 'Jake', 
        text: 'This is some Jake review about some purchase he recently made and not satisfied at all. He will request money refund.' 
    }
];

const testimonialsContainer = document.getElementById('testimonials');

const testimonialElements = testimonialsData.map(testimonialData => {
    
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');

    
    testimonialElement.innerHTML = `<h3>${testimonialData.name}</h3><div>${testimonialData.text}</div>`;

    return testimonialElement;
});

  
testimonialsContainer.append(...testimonialElements);
