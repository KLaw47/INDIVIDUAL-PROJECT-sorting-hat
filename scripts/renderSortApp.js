import filterBtns from "./filterBtns.js";
import renderToDom from "./renderToDom.js";

const renderSortApp = () => {
  let domstring =`
  <form>
  <div class="mb-3">
    <label for="StudentName" class="form-label">Student Name</label>
    <input type="Student-name" class="form-control" id="StudentName" aria-describedby="student-name">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

renderToDom ("#sortForm", domstring);

}
export default renderSortApp;
