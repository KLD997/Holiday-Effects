const snowflakeVectors = [
    'https://justanerds.site/data/files/snowflake1.png',
    'https://justanerds.site/data/files/snowflake2.png',
    'https://justanerds.site/data/files/snowflake3.png',
    'https://justanerds.site/data/files/snowflake4.png',
    'https://justanerds.site/data/files/snowflake5.png',
    'https://justanerds.site/data/files/snowflake6.png',
    'https://justanerds.site/data/files/snowflake7.png',
    'https://justanerds.site/data/files/snowflake8.png',
    'https://justanerds.site/data/files/snowflake9.png'
];

document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 4 + 3) + 's';

        const randomSize = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
        snowflake.style.width = randomSize + 'px';
        snowflake.style.height = randomSize + 'px';

        const randomSnowflakeVector = snowflakeVectors[Math.floor(Math.random() * snowflakeVectors.length)];
        snowflake.style.backgroundImage = `url('${randomSnowflakeVector}')`;

        snowflakesContainer.appendChild(snowflake);
    }
});
