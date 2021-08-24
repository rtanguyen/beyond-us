import React from 'React';

const Singlepost = () =>

react (
    <div>
    {/* SINGLE PAGE */}
    <div className="singlePost">
      <div className="column">
        <div className="row">
          <div className="col-12 mt-3">
            <h2 className="text-center fw-bolder spTitle">
              Fearful people of Afghanistan in search of a way out
            </h2>
            <br />
            <h5 className="text-center spSubtitle">
              In mere days, the Taliban took over the capital city of Kabul and the innocent lives that reside there. 
            </h5>
            <p className="spDate text-center">Saturday, August, 21, 2021</p>
          </div>
        </div>
      </div>
      <div className="column spImage">
        <div className="row">
          <div className="text-center spImage">
            <img src="assets/img/afghan.jpg" style={{width: '50%'}} alt="men in car" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="spBody py-5 row">
        <div className="col-2" />
        <div className="col-8">
          <p className="spBodyContent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores possimus dolorem alias iusto veritatis harum assumenda reiciendis dolor molestias aperiam exercitationem autem, qui commodi tempore at, iste sed minus adipisci? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rem repellat impedit labore, voluptates autem debitis perferendis neque quasi aspernatur asperiores qui eos temporibus praesentium sint quia nihil ipsa recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi labore corrupti quae unde! Nulla deleniti voluptatum nostrum rem nobis voluptatibus repudiandae consectetur, doloribus facere ea eum earum odio nesciunt.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nobis modi quaerat esse ad illum iure cupiditate voluptas sint. Voluptatibus quae neque dolore consectetur fuga est sit fugiat mollitia totam?
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, doloremque iste et temporibus modi molestiae fuga magni magnam expedita accusantium illo accusamus quidem aperiam nam hic rem omnis ipsam impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laboriosam labore totam deserunt cupiditate cum accusamus facere enim perferendis eaque harum incidunt debitis qui unde ut voluptas hic distinctio. Nulla.
          </p>
          <div className="writtenBy">
            <p className="author text-end">Written by: Mimi Vo</p>
          </div>
        </div>
        <div className="col-2" />
      </div>
    </div>
  </div>
);




export default Singlepost;