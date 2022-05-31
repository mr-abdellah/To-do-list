const generateTasks = ({ description }) => `
        <li class="oneTask">
            <input type="checkbox" name="check" id="check">
            <h2>${description}</h2>
            <button type="submit" class="dots">...</button>
        </li>
        `;

export default generateTasks;