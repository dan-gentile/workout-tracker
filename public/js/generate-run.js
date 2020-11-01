const generateRunDivs = (run, runDate) => {
    return `   <div class="date">
                <span class="delete" data-id="${run._id}">&times;</span>
                <h3>${runDate}</h3>
            </div>
            <input class="run-title" id="title-${run._id}" type="text" value="${run.title}">
            <div class="details">
                <div class="distance-div">
                    <label for="distance">Distance:</label>
                    <input class="distance" id="distance-${run._id}" type="text" value="${run.distance}">
                </div>
                <div class="duration-div">
                    <label for="duration">Duration:</label>
                    <input class="duration" id="duration-${run._id}"  type="text" value="${run.duration}">
                </div>
                <div class="pace-div">
                    <label for="pace">Pace:</label>
                    <input class="pace" id="pace-${run._id}" type="text" value="${run.pace}" readonly>
                </div>
                <div class="run-type-div">
                    <label for="run-type">Type:</label>
                    <select class="run-type" id="run-type-${run._id}" value="${run.runType}">
                        <option value="Easy">Easy Run</option> 
                        <option value="Long" >Long Run</option>
                        <option value="Workout" >Workout</option>
                        <option value="Race">Race</option>
                      </select>
                </div>
            </div>
            <button class="update button" data-id="${run._id}">Update</button>
`

}