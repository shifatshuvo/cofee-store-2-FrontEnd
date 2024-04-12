import "./users.css";

const Table = () => {
  return (
    <div className="product-list">
      <h1>All Product List</h1>
      <p className="message-p"></p>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img src="" alt="" />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p>delet icon</p>
                <a className="updateButton">
                  <p>icon of edit</p>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
