function handleChat() {
    const input = document.getElementById('input').value.toLowerCase();
    const output = document.getElementById('output');

    let response = "I'm sorry, I don't understand your question.";

    if (input.includes("name") || input.includes("who are you")) {
        response = "I am Duraisingh, a CSE student at MIT, Anna University.";
    } else if (input.includes("skills") || input.includes("programming")) {
        response = "I am skilled in Python, Java, C++, HTML/CSS, and frameworks like Node.js and MongoDB.";
    } else if (input.includes("interests") || input.includes("passion")) {
        response = "I am passionate about AI, cloud computing, and cybersecurity.";
    } else if (input.includes("education")) {
        response = "2020 - 2021:\n\nCompleted 10th std at Vani Vidyalaya Matric. Hr. Sec. School.\n2022 - 2023:\n\nCompleted 12th std at Vani Vidyalaya Matric. Hr. Sec. School.\n2023 - 2027:\n\nPursuing B.E. CSE at MIT, Anna University. ";
    } else if (input.includes("soft skills")) {
        response = "My soft skills include leadership, problem-solving, communication, and punctuality.";
    } else if (input.includes("contact")) {
        response = "Feel free to reach out through my contact section!";
    }

    const newMessage = `<p><strong>Ungal Kelvi:</strong> ${input}</p><p><strong>Pathil:</strong> ${response}</p>`;
    output.innerHTML += newMessage;

    document.getElementById('input').value = "";
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
}
