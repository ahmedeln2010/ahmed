document.addEventListener('DOMContentLoaded', function() {
    const storyContainer = document.getElementById('story-container');
    const partContainer = document.getElementById('part-container');
    const backButton = document.getElementById('back-to-stories');
    const storyTitle = document.getElementById('story-title');
    const partsList = document.getElementById('parts-list');

    // Generate 1,000 stories dynamically
    const stories = [];
    for (let i = 1; i <= 1000; i++) {
        stories.push({
            id: i,
            title: `Story ${i}`,
            cover: `images/story${i}_cover.jpg`
        });
    }

    // Create story elements
    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story';
        storyDiv.innerHTML = `
            <img src="${story.cover}" alt="${story.title}">
            <div class="story-title">${story.title}</div>
        `;
        storyDiv.addEventListener('click', () => showParts(story));
        storyContainer.appendChild(storyDiv);
    });

    // Show parts of a story
    function showParts(story) {
        storyContainer.style.display = 'none';
        partContainer.style.display = 'block';
        storyTitle.textContent = story.title;
        partsList.innerHTML = '';

        for (let i = 1; i <= 3; i++) {
            const partDiv = document.createElement('div');
            partDiv.className = 'part';
            partDiv.innerHTML = `
                <img src="images/part${i}_cover.jpg" alt="Part ${i}">
                <div class="part-title">Part ${i}</div>
                <a href="videos/${story.id}_part${i}.mp4" download>Download Part ${i}</a>
            `;
            partsList.appendChild(partDiv);
        }
    }

    // Go back to story list
    backButton.addEventListener('click', () => {
        storyContainer.style.display = 'block';
        partContainer.style.display = 'none';
    });
});

