document.getElementById('submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    const basePrice = 100;


    let education = document.getElementById('education').value;
    let educationCoeff = 1;
    switch (education) {
        case 'bachelor':
            educationCoeff = 1.5;
            break;
        case 'college':
            educationCoeff = 1.2;
            break;
        case 'high_school':
            educationCoeff = 1.05;
            break;
        case 'middle_school':
            educationCoeff = 0.9;
            break;
    }

    let networth = document.getElementById('networth').value;
    let networthCoeff = 1;
    switch (networth) {
        case 'upper_class':
            networthCoeff = 2;
            break;
        case 'middle_class':
            networthCoeff = 1.5;
            break;
        case 'lower_class':
            networthCoeff = 1.2;
            break;
    }

   
    let caste = document.getElementById('Caste').value;
    let casteBonus = 0;
    switch (caste) {
        case 'upper_class':
            casteBonus = 100;
            break;
        case 'middle_class':
            casteBonus = 50;
            break;
        case 'Vaishya':
            casteBonus = 20;
            break;
        case 'Shudra':
            casteBonus = 10;
            break;
        case 'Varna':
            casteBonus = -50;
            break;
    }

   
    let skillsBonus = 0;
    if (document.getElementById('playing_instrument').checked) {
        skillsBonus += 10;
    }
    if (document.getElementById('good_cook').checked) {
        skillsBonus += 20;
    }
    if (document.getElementById('Easygoing_character').checked) {
        skillsBonus += 15;
    }
    if (document.getElementById('sings_well').checked) {
        skillsBonus += 10;
    }

   
    let ageCoeff = 1;
    if (document.getElementById('youngest').checked) {
        ageCoeff = 1.5;
    } else if (document.getElementById('Between').checked) {
        ageCoeff = 1.2;
    } else if (document.getElementById('oldest').checked) {
        ageCoeff = 0.95;
    }

    
    let reputationCoeff = 1;
    if (document.getElementById('gossip_parents').checked) {
        reputationCoeff *= 0.85;
    }
    if (document.getElementById('gossip_character').checked) {
        reputationCoeff *= 0.9;
    }
    if (document.getElementById('general_gossips').checked) {
        basePrice -= 20;
    }

    
    let finalPrice = basePrice * educationCoeff * networthCoeff * ageCoeff * reputationCoeff + casteBonus + skillsBonus;

    document.querySelector('.js-final-price').innerHTML = `Final price: $${finalPrice}`;
    
}
