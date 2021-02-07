const submitBtn = document.getElementById('submit-btn',);
submitBtn.addEventListener('click', () => {
    
    const mealInput = document.getElementById('meal-input').value;
     getInputData(mealInput);
})


 const getInputData = meal =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res =>res.json())
    .then(data =>{
        if (data.meals == null) {
            const allMealContainer = document.getElementById('not-found');
            allMealContainer.innerHTML = '<h2>Not Found This Meal &#128514</h2>';
            const allMealContainerNone = document.getElementById('item');
            allMealContainerNone.innerHTML = '';
            const meatDetailDiv = document.getElementById('meal-detail');
            meatDetailDiv.innerHTML = '';
        }
        else{
            foodItemData(data.meals);
        }
        
    })}
    
    const foodItemData = mealName =>{
        const allMealContainer = document.getElementById('item');
        allMealContainer.innerHTML ='';
        mealName.forEach(meals => {
            console.log(meals);
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal-div';
            const mealInfo =`
            <img onclick="displayMealId('${meals.idMeal}')" src="${meals.strMealThumb}">
            <p onclick="displayMealId('${meals.idMeal}')">${meals.strMeal}</p>
            
            `
            mealDiv.innerHTML = mealInfo;
             allMealContainer.appendChild(mealDiv);

             const allMealContainerNone = document.getElementById('not-found',);
             allMealContainerNone.innerHTML = '';
             const meatDetailDiv = document.getElementById('meal-detail');
            meatDetailDiv.innerHTML = '';


            
        });
    }
    
  
    
    
    const displayMealId = name => {
        const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
        fetch(url)
        .then(res =>res.json())
        .then(data => renderMealInfo(data.meals[0]));
        
      }
    

    
      const renderMealInfo = meatDetail =>{
        console.log(meatDetail);
        const meatDetailDiv = document.getElementById('meal-detail');
        meatDetailDiv.innerHTML = `
        <img src="${meatDetail.strMealThumb}">
        <h3>${meatDetail.strMeal}</h3>
        <h5>Ingredient</h5>
        <ul>
        <li>${meatDetail.strIngredient1}</li>
        <li>${meatDetail.strIngredient2}</li>
        <li>${meatDetail.strIngredient3}</li>
        <li>${meatDetail.strIngredient4}</li>
        <li>${meatDetail.strIngredient5}</li>
        <li>${meatDetail.strIngredient6}</li>
        </ul>
        `
    }


    