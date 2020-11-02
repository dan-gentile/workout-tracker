const generateRunDivs = (run, runDate) => {
    return `   <div class="date">
                <span class="delete" data-id="${run._id}">&times;</span>
                <h3>${runDate}</h3>
            </div>
            <label for="title-${run._id}"></label>
            <input class="run-title" id="title-${run._id}" type="text" value="${run.title}">
            <div class="details">
                <div class="distance-div">
                    <label for="distance-${run._id}">Distance:</label>
                    <input class="distance" id="distance-${run._id}" type="text" value="${run.distance}">
                </div>
                <div class="duration-div">
                    <label for="duration-${run._id}">Duration:</label>
                    <input class="duration" id="duration-${run._id}"  type="text" value="${run.duration}">
                </div>
                <div class="pace-div">
                    <label for="pace-${run._id}">Pace:</label>
                    <input class="pace" id="pace-${run._id}" type="text" value="${run.pace}" readonly>
                </div>
                <div class="run-type-div">
                    <label for="run-type-${run._id}">Type:</label>
                    <select class="run-type" id="run-type-${run._id}">
                        <option selected="selected">${run.runType}</option>
                        <option value="Easy Run">Easy Run</option> 
                        <option value="Long Run" >Long Run</option>
                        <option value="Workout" >Workout</option>
                        <option value="Race">Race</option>
                      </select>
                </div>
            </div>
            <button class="update button" data-id="${run._id}">Update</button>
`

}