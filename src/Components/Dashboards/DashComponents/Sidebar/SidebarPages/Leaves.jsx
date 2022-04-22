import SidebarMain from "../Sidebarcomponents/SidebarMain";
import "../Sidebar.css"


const Leaves = () => {
  return (
     
    <SidebarMain>
      <div className="title">Leave Application</div>
      <div class="row row-cols-md-2">
        <div class="col">
          <div class="card text-dark bg-light " style={{width:"18rem", margin: 10}}>
            <div class="card-body">
            <h4 class="card-title">Long Leave</h4>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="/studentdashboard/leaveapplication/longleave" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-dark bg-light " style={{width:"18rem", margin: 10}}>
            <div class="card-body">
              <h4 class="card-title">Short Leave</h4>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" class="btn btn-primary" >Go somewhere</a>           
            </div>
          </div>
        </div>
      </div>
  </SidebarMain>
  ) 
};

export default Leaves;
