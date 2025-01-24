
document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note-input");
    const saveNoteButton = document.getElementById("save-note");
    const clearNotesButton = document.getElementById("clear-notes");
    const notesList = document.getElementById("notes-list");

    // Load saved notes from localStorage
    const loadNotes = () => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        notesList.innerHTML = ""; // Clear current list
        savedNotes.forEach((note, index) => {
            const li = document.createElement("li");
            li.textContent = note;
            li.dataset.index = index;
            notesList.appendChild(li);
        });
    };

    // Save a new note
    saveNoteButton.addEventListener("click", () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
            savedNotes.push(noteText);
            localStorage.setItem("notes", JSON.stringify(savedNotes));
            loadNotes();
            noteInput.value = ""; // Clear the input
        } else {
            alert("Please enter a note before saving!");
        }
    });

    // Clear all notes
    clearNotesButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all notes?")) {
            localStorage.removeItem("notes");
            loadNotes();
        }
    });

    // Load notes on page load
    loadNotes();
});



document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll("#rating-stars .star");
    const userRatingMsg = document.getElementById("user-rating-msg");
    const averageRating = document.getElementById("average-rating");

    stars.forEach((star) => {
        star.addEventListener("mouseover", () => {
            // Highlight stars up to the hovered star
            resetStars();
            highlightStars(star.dataset.rating);
        });

        star.addEventListener("mouseout", resetStars);

        star.addEventListener("click", () => {
            // Set the selected rating
            const rating = star.dataset.rating;
            highlightStars(rating, true);
            userRatingMsg.textContent = `You rated this course ${rating}/5. Thank you!`;
        });
    });



    // Reset stars to default
    function resetStars() {
        stars.forEach((star) => {
            star.classList.remove("selected");
        });
    }

    // Highlight stars up to a specific rating
    function highlightStars(rating, persist = false) {
        stars.forEach((star) => {
            if (star.dataset.rating <= rating) {
                star.classList.add("selected");
            }
        });

        if (persist) {
            stars.forEach((star) => {
                if (star.dataset.rating <= rating) {
                    star.classList.add("selected");
                }
            });
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const videoCards = document.querySelectorAll(".video-card");
    const youtubePlayer = document.getElementById("youtube-player");
    const videoTitle = document.querySelector(".video-details h2");
    const aiSummary = document.getElementById("ai-summary");

    // Example AI summaries for videos
    const videoSummaries = {
        "dQw4w9WgXcQ": "This video covers the basics of web development, including HTML, CSS, and JavaScript.",
        "3JZ_D3ELwOQ": "Learn how to get started with HTML, the backbone of web development.",
        "2Vv-BfVoq4g": "Understand the fundamentals of CSS and how to style your web pages effectively.",
        "z9OYFGoi1No": "An introduction to JavaScript, including variables, loops, and functions.",
        "lTTajzrSkCw": "A step-by-step guide to building your first complete website.",
        "mh45igK4Esw": "Explore advanced CSS techniques like animations and transitions.",
        "KN8dzI24tAE": "Learn how to debug JavaScript effectively to solve common coding issues.",
        "g8B3O8yRzPs": "A complete guide to deploying your website to a live server."
    };

    // Handle video card click
    videoCards.forEach((card) => {
        card.addEventListener("click", () => {
            const videoId = card.dataset.videoId;
            youtubePlayer.src = `https://www.youtube.com/embed/${videoId}`;
            videoTitle.textContent = card.querySelector("h4").textContent;
            aiSummary.textContent = `AI-Generated Summary: ${videoSummaries[videoId] || "No summary available for this video."}`;
        });
    });

    // Handle "Mark as Completed" checkbox
    document.querySelectorAll(".mark-complete").forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const card = event.target.closest(".video-card");
            if (event.target.checked) {
                card.style.backgroundColor = "#d4edda"; // Greenish background for completed
            } else {
                card.style.backgroundColor = "#f8f9fa"; // Reset background
            }
        });
    });
});



