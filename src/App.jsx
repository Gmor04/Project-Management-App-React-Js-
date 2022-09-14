import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [activity, setActivity] = useState([]);
  const [progress, setProgress] = useState([]);
  const [suspend, setSuspend] = useState([]);
  const [complete, setcomplete] = useState([]);

  const handleActivity = (input) => {
    const i = input.trim();
    !i ? alert("Add Task") : activity.push(input);
    setActivity([...activity]);
    setInput("");
  };

  const starttodo = (event, index) => {
    progress.push(activity[index]);
    setProgress([...progress]);
    activity.splice(index, 1);
    setActivity([...activity]);
  };

  const suspendprogress = (event, index) => {
    suspend.push(progress[index]);
    setSuspend([...suspend]);
    progress.splice(index, 1);
    setProgress([...progress]);
  };
  const continueSuspend = (event, index) => {
    progress.push(suspend[index]);
    setProgress([...progress]);
    suspend.splice(index, 1);
    setSuspend([...suspend]);
  };
  const completeprogress = (event, index) => {
    complete.push(progress[index]);
    setcomplete([...complete]);
    progress.splice(index, 1);
    setProgress([...progress]);
  };
  const undocomplete = (event, index) => {
    activity.push(complete[index]);
    setActivity([...activity]);
    complete.splice(index, 1);
    setcomplete([...complete]);
  };
  const deletetodo = (event, index) => {
    activity.splice(index, 1);
    setActivity([...activity]);
  };
  const deleteprogress = (event, index) => {
    progress.splice(index, 1);
    setProgress([...progress]);
  };
  const deleteSuspend = (event, index) => {
    suspend.splice(index, 1);
    setSuspend([...suspend]);
  };
  const deletecomplete = (event, index) => {
    complete.splice(index, 1);
    setcomplete([...complete]);
  };

  // const handleProgress = (index) => {
  //     if (checked.length > 0) {
  //         setProgress([...checked])
  //         for(const item of checked){
  //           let i = activity.indexOf(item)
  //           activity.splice(i,1)
  //         }
  //         setActivity([...activity])

  //     } else { return }
  // }

  return (
    <div className="App">
      <main className="p-2">
        <div className="mt-2 w-100 d-flex gap-4">
          <input
            type="text"
            value={input}
            placeholder="Enter a task"
            className="form-control w-75"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-secondary w-25"
            onClick={() => handleActivity(input)}
          >
            Add
          </button>
        </div>

        <section className="d-flex justify-content-between gap-2 mt-5">
          <div className="bg-secondary w-25 p-2 set">
            <div className="w-100 h-auto text-white fs-5 shadow py-2 px-4">
              📝 Activity
            </div>
            {activity.map((value, index) => (
              <div
                key={index}
                className="w-100 rounded-2 bg-primary h-auto px-4 py-2 mt-2 "
              >
                <div className="w-100 text-center text-light fs-4">{value}</div>
                <div
                  className="row d-flex align-item-center justify-content-around  mt-3 "
                  style={{ height: "5vh" }}
                >
                  <button
                    className="bg-success text-light col-md-4 border border-0 rounded  "
                    onClick={(event) => starttodo(event, index)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                  <button className="bg-info text-light col-md-3 border border-0 rounded ">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    className="bg-danger text-light col-md-4 border border-0 rounded "
                    onClick={(event) => deletetodo(event, index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary w-25   p-2 set">
            <div className="w-100 h-auto text-white fs-5 shadow py-2 px-4">
              ⚙ In progress
            </div>
            {progress.map((value, index) => (
              <div
                key={index}
                className="w-100 rounded-2 bg-warning h-auto px-4 py-2 mt-2"
              >
                <div className="w-100 text-center text-light fs-4">{value}</div>
                <div
                  className="row d-flex align-item-center justify-content-around  mt-3 "
                  style={{ height: "5vh" }}
                >
                  <button
                    className="bg-success text-light col-md-4 border border-0 rounded "
                    onClick={(event) => completeprogress(event, index)}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button
                    className="bg-primary text-light col-md-3 border border-0 rounded "
                    onClick={(event) => suspendprogress(event, index)}
                  >
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </button>
                  <button
                    className="bg-danger text-light col-md-4 border border-0 rounded "
                    onClick={(event) => deleteprogress(event, index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-warning w-25   p-2 set">
            <div className="w-100 h-auto text-white fs-5 shadow py-2 px-4">
              ⚠ Suspended
            </div>
            {suspend.map((value, index) => (
              <div
                key={index}
                className="w-100 rounded-2 bg-success h-auto px-4 py-2 mt-2 "
              >
                <div className="w-100 text-center text-light fs-4">{value}</div>
                <div
                  className="row d-flex align-item-center justify-content-around  mt-3 "
                  style={{ height: "5vh" }}
                >
                  <button
                    className="bg-info text-light col-md-6 border border-0 rounded "
                    onClick={(event) => continueSuspend(event, index)}
                  >
                    <i className="fa-solid fa-spinner"></i>
                  </button>
                  <button
                    className="bg-danger text-light col-md-5 border border-0 rounded "
                    onClick={(event) => deleteSuspend(event, index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-success w-25   p-2 set">
            <div className="w-100 h-auto text-white fs-5 shadow py-2 px-4">
              ✔ Completed
            </div>
            {complete.map((value, index) => (
              <div
                key={index}
                className="w-100 rounded-2 bg-secondary h-auto px-4 py-2 mt-2  "
              >
                <div className="w-100 text-center text-light fs-4">{value}</div>
                <div
                  className="row d-flex align-item-center justify-content-around  mt-3 "
                  style={{ height: "5vh" }}
                >
                  <button
                    className="bg-info text-light col-md-6 border border-0 rounded "
                    onClick={(event) => undocomplete(event, index)}
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                  <button
                    className="bg-danger text-light col-md-5 border border-0 rounded "
                    onClick={(event) => deletecomplete(event, index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
