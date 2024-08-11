const postData = async (user) => {
    let req = await fetch("http://localhost:8520/tasks", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    });
    let res = await req.json();
    console.log(res);
};

let id = document.cookie;
let userId = id.split("=")[1];
if (!userId) {
    window.location.href = "http://127.0.0.1:5500/view/login.html";
}

const handleData = (e) => {
    e.preventDefault();
    let data = {
        task: document.getElementById('task').value,
        userId: userId
    };
    postData(data);
};

document.getElementById("taskData").addEventListener("submit", handleData);

const mapper = (data) => {
    document.getElementById("list").innerHTML = "";

    data.map((ele) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = ele.task;
        let h2 = document.createElement("h2");
        h2.innerHTML = ele.status;
        let div = document.createElement("div");
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "Delete";
        deletebtn.addEventListener("click", () => deletebtnClick(ele._id)); 
        let updatebtn = document.createElement("button");
        updatebtn.innerHTML = "Update";
        updatebtn.addEventListener("click", () => updatebtnClick(ele._id))

        div.append(h1, h2, deletebtn, updatebtn);

        document.getElementById("list").append(div);
    });
};

const getTask = async () => {
    let req = await fetch(`http://localhost:8520/tasks/user/${userId}`);
    let data = await req.json();

    mapper(data);
};
getTask();

const deletebtnClick = async (taskId) => {
    let res = await fetch(`http://localhost:8520/tasks/${taskId}`, {
        method: 'DELETE',
    });
    let json = await res.json();
    console.log(json);
    getTask();
};

const updatebtnClick = async (taskId) => {
    let status = prompt("Enter new status");
    let data = {
        status: status
    };
    let res = await fetch(`http://localhost:8520/tasks/${taskId}`, {
        method: 'PUT',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
    });
    let json = await res.json();
    console.log(json);
    getTask();
}



