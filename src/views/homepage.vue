<template>
  <div>
    <div
      class="bg-warnig d-flex w-100"
      style="height: 70px; justify-content: space-between; padding: 13px 81px"
    >
      <div class="bg-dar d-flex" style="height: 60px; width: 35%; cursor: pointer">
        <div class="bg-sry d-flex" style="height: 60px; width: 50%">
          <div
            @click="$router.push('/')"
            class="w-50 bg-ifo"
            style="height: 60px; padding-left: 25px"
          >
            <a class="card-link"
              ><img class="" style="width: 45px; height: 45px" src="/image1.png" alt=""
            /></a>
          </div>
          <div
            class=""
            style="
              background-color: #0b2653;
              width: 1px;
              height: 25px;
              margin-left: 15px;
              margin-top: 13px;
              font-weight: 700;
            "
          ></div>
        </div>
        <div class="w-100 bg-inf" style="height: 60px; margin-left: -48px">
          <ul style="list-style: none; display: flex; height: 40px; margin-left: -50px">
            <li><a class="card-link" style="color: #0c2754; font-weight: 700" href="">Home</a></li>

            <li>
              <a class="card-link" style="font-weight: lighter; text-decoration: none" href=""
                >About</a
              >
            </li>
            <li>
              <a class="card-link" style="font-weight: lighter; text-decoration: none" href=""
                >Contact</a
              >
            </li>
            <li>
              <a class="" style="font-weight: lighter; text-decoration: none" href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex bg-daner" style="height: 60px; width: 25%; background-color: puple">
        <div class="bg-prmary d-flex" style="width: 37%; height: 60px; padding-top: 15px">
          <div class="bg-se w-25 mt-1" style="height: 22px">
            <img class="" style="height: 100% !important; width: 100%" src="/user.png" alt="" />
          </div>
          <a @click="handleAuth" class="mt-2"

            style="
              color: #0c2754;
              margin-left: 4px;
              font-size: 14px !important;
              font-weight: bold;
              cursor: pointer;
              text-decoration:none;
            "
          >
          {{ token ? 'Sign out' : 'Sign in' }}
        </a>
        </div>
        <div
          @click="$router.push('/requestaquote')"
          class="btn btn-sm"
          style="
            background-color: #01c881;
            height: 40px;
            padding-top: 12px;
            margin: 10px 18px;
            border-radius: 7px;
            margin-left: px;
            color: #ffffff;
            font-weight: bold;
            font-size: 12px;
          "
        >
          Request a quote
        </div>
      </div>
    </div>

    <div
      class="bg-dager w-100 d-flex"
      style="
        justify-content: space-between;
        align-items: center;
        padding: 0px 80px;
        height: fit-content;
      "
    >
      <div class="bg-primar mt-4" style="width: 50%; height: 350px">
        <h6 style="color: #01c881; font-weight: 700">Welcome To Our Website</h6>
        <h1 class="mt-3" style="color: #0c2753; font-size: 40px; font-weight: 700">
          Thinking Insights & <br />
          Verified Driven <br />
          Research Data!
        </h1>
        <p class="" style="font-size: 10px; color: #0c2753; font-weight: 500">
          We are experienced professionals who understand that it<br />
          services is changing, and are true partners who care about your<br />
          success. Our team provides a consultative approach on <br />emerging technology
        </p>
        <!-- <div class="btn btn-sm ml-5 mt-3" style="background-color:#01C881;border-radius: 7px; font-size: 12px;
    color: white;font-weight: bold;">Request a quote</div> -->

    <div class="d-flex bg-dak" style="align-items: center; gap: 10px">
      <div
        @click="$router.push('/requestaquote')"
        class="btn btn-sm"
        style="
          background-color: #01c881;
          border-radius: 7px;
          font-size: 12px;
          color: #ffffff;
          font-weight: bold;
          padding: 10px 20px;
        "
      >
        Request a quote
      </div>

      <div
        class="bg-sucess d-flex"
        style="align-items: center; margin-left: 18px; cursor: pointer"
      >
        <i
          style="color: #0b2653; font-size: 30px; font-weight: 700"
          class="fa-solid fa-circle-play"
        ></i>
        <p
          style="
            font-size: 12px;
            margin-bottom: 0px;
            margin-left: 5px;
            color: #0b2653;
            font-weight: 700;
          "
        >
          play video
        </p>
      </div>
    </div>
  </div>
  <div class="bg-ifo" style="position: relative; width: 40%; margin-right: 90px; height: 450px">
    <img
      class="bg"
      style="height: 100%; width: 100%; background-size: cover"
      src="/man.png"
      alt=""
    />
    <img
      class=""
      style="height: 240px; position: absolute; bottom: -44px; left: -175px"
      src="/hr.png"
      alt=""
    />
    <div
      class="bg-secodary"
      style="
        padding: 16px;
        display: flex;
        box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 2;
        right: -50px;
        top: 167px;
        background-color: #ffffff;
      "
    >
      <img class="" src="/man1.png" alt="" />
      <h5 style="font-size: 9px; margin-top: 5px; color: #0c2754; font-weight: 500">
        ANTHONY HALL
      </h5>
      <p style="font-size: 8px; margin-bottom: 10px; color: #0c2754">photographer</p>
      <h3
        style="
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 9px;
          text-align: center;
          color: #0c2754;
        "
      >
        10 Lifehacks If <br />
        You Decide Move <br />To Thailand
      </h3>
      <div
        class="btn"
        style="
          background-color: #01c881;
          border-radius: 1px;
          font-size: 8px;
          color: #ffffff;
          font-weight: bold;
        "
      >
        Read More
      </div>
    </div>
  </div>
</div>
<div class="bg-daner mt-5 w-100" style="height: 250px; text-align: center; padding-top: 60px">
  <p style="color: #01c881; font-weight: 800">Nationworld Service , Local Expertise</p>
  <h2 style="color: #0c2754; font-weight: 700">
    Our Technology Allows You To Offer The <br />
    Latest Software To Possible<br />
    Customers!
  </h2>
</div>

<div class="bg-ino mt-5 d-flex w-100" style="height: 300px; padding: 0px 80px">
  <div class="w-100 bg-wrning" style="height: 300px">
    <div class="" style="height: 60px; background-color: ellow; width: 70px">
      <img class="" style="height: 100% !important; width: 100%" src="/Union.png" alt="" />
    </div>
    <h3 style="margin-top: 30px; color: #0c2753; font-weight: 700">
      IT Management <br />
      Services
    </h3>
    <p style="margin-top: 30px; font-size: 12px; color: #0c2753; font-weight: 500">
      IT management service that manages and<br />
      oversees the IT infrastructure of organization<br />
      responsible for network and operatoins which<br />
      includes data and communication.
    </p>
  </div>
  <div class="w-100 bg-scondary" style="height: 300px">
    <div class="" style="height: 60px; background-color: ellow; width: 70px">
      <img class="" style="height: 100% !important; width: 100%" src="/CYBER.png" alt="" />
    </div>
    <h3 style="margin-top: 30px; color: #0c2753; font-weight: 700">
      Cyber Security <br />
      Services
    </h3>
    <p style="margin-top: 30px; font-size: 12px; color: #0c2753; font-weight: 500">
      IT management service that manages and<br />
      oversees the IT infrastructure of organization<br />
      responsible for network and operatoins which<br />
      includes data and communication.
    </p>
  </div>
  <div class="w-100 bg-suess" style="height: 300px">
    <div class="" style="height: 60px; background-color: ellow; width: 70px">
      <img class="" style="height: 100% !important; width: 100%" src="/CLOUD.png" alt="" />
    </div>
    <h3 style="margin-top: 30px; color: #0c2753; font-weight: 700">
      Cloud Computing<br />
      Services
    </h3>
    <p style="margin-top: 30px; font-size: 12px; color: #0c2753; font-weight: 500">
      IT management service that manages and<br />
      oversees the IT infrastructure of organization<br />
      responsible for network and operatoins which<br />
      includes data and communication.
    </p>
  </div>
</div>

<div
  class="bg-ino mt-5 d-flex w-100"
  style="height: 400px; padding: 0px 80px; margin-top: 110px !important"
>
  <div class="w-100 bg-warnng" style="height: 350px">
    <div class="" style="height: 60px; background-color: ellow; width: 70px">
      <img class="" style="height: 100% !important; width: 100%" src="/Union1.png" alt="" />
    </div>
    <h3 style="margin-top: 30px; color: #0c2753; font-weight: 700">
      IT Consulting<br />
      Services
    </h3>
    <p style="margin-top: 30px; font-size: 12px; color: #0c2753; font-weight: 500">
      IT management service that manages and<br />
      oversees the IT infrastructure of organization<br />
      responsible for network and operatoins which<br />
      includes data and communication.
    </p>
  </div>
  <div class="w-100 bg-seconary" style="height: 350px">
    <div class="" style="height: 60px; background-color: ellow; width: 70px">
      <img class="" style="height: 100% !important; width: 100%" src="/Union2.png" alt="" />
    </div>
    <h3 style="margin-top: 30px; color: #0c2753; font-weight: 700">
      Software Dev <br />
      Services
    </h3>
    <p style="margin-top: 30px; font-size: 12px; color: #0c2753; font-weight: 500">
      IT management service that manages and<br />
      oversees the IT infrastructure of organization<br />
      responsible for network and operatoins which<br />
      includes data and communication.
    </p>
  </div>
  <div class="w-100 bg-waring text-white" style="height: 300px">
    <div
      class="w-75 bg-dager text-white"
      style="
        height: 350px;
        background-size: cover;
        background-image: url(Rectangle\ 141.png);
        padding: 30px 0;
      "
    >
      <h3 style="color: #ffffff; font-weight: 700; margin-left: 30px">
        Help Your<br />
        Business Win!
      </h3>
      <p style="font-size: 12px; color: #ffffff; font-weight: 200; margin-left: 30px">
        phlox is a trusted advisor and an objective<br />resource for more than 17000
        organizations in <br />
        90+ countries.
      </p>

      <div
        class="w-50 btn btn-md"
        style="
          height: 32px;
          margin-left: 30px;
          font-size: 10px;
          margin-top: 70px;
          background-color: #ffffff;
          color: #01c881;
          font-weight: 700;
        "
      >
        Find Your Solution
        <i
          style="color: #01c881; margin-left: 8px; height: 20px"
          class="fa-solid fa-arrow-right"
        ></i>
      </div>
    </div>
  </div>
</div>

<div class="w-100 d-flex" style="background-color: #f9f9f9; height: 490px; padding: 43px 80px">
  <div class="bg-succes" style="height: 400px; position: relative; width: 40% !important">
    <img
      style="width: 90% !important; height: 400px; background-size: cover"
      src="/image 13.png"
    />
    <div
      class="bg-warnng"
      style="
        height: 150px;
        position: absolute;
        top: 280px;
        left: -10px;
        width: 63%;
        padding: 20px 10px;
        background-color: white;
        box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
      "
    >
      <p style="font-size: 13px; color: #0c2754; font-weight: 700">
        Thinking Phlox, Verified Driven <br />Research, And Metrics Data Help <br />You Make The
        Right Decisions!
      </p>
      <div
        class="w-75 btn btn-md"
        style="
          height: 32px;
          background-color: yelow;
          font-size: 13px;
          color: #01c881;
          font-weight: 700;
          margin-left: -18px;
        "
      >
        Read Our Case Study<i
          style="
            color: #01c881;
            margin-left: 9px;
            margin-top: 2px;
            height: 20px;
            font-size: 15px;
          "
          class="fa-solid fa-arrow-right"
        ></i>
      </div>
    </div>
  </div>
  <div class="bg-priary" style="height: 400px; padding: 15px 0px; width: 60% !important">
    <p style="font-size: 12px; margin-left: 15px; color: #01c881; font-weight: 700">
      Trusted By The World's Best Organization
    </p>
    <h2 style="font-size: 25px; color: #0c2754; font-weight: 700">
      Manages Service Delivery Across <br />Various Business Like, HR, Legal <br />
      And Other IT Departments!!
    </h2>
    <h6 style="font-size: 11px; color: #0c2754; font-weight: 700">
      Phlox has been helping organizations throughout the world to manage <br />their it with
      our unique approach to technology management and <br />
      consultancy solutions. As one of the world's largest ITService Providers, our deep pool of
      over 130 certified engineers and IT support staff are ready to help.
    </h6>
    <p style="font-size: 10px; color: #0c2754; font-weight: 500">
      As one of the world's largest ITService Providers, our deep pool of over 130 <br />
      certified engineers and IT support staff are ready to help.
    </p>

    <h5 style="font-size: 12px; color: #0c2754; font-weight: 700">
      <i class="fa-solid fa-check"></i> Delivered in more than 450,000 client's interactions
    </h5>
    <h5 style="font-size: 12px; color: #0c2754; font-weight: 700">
      <i class="fa-solid fa-check"></i> Provided by experts to help challenge critical
      activities
    </h5>
    <h5 style="font-size: 12px; color: #0c2754; font-weight: 700">
      <i class="fa-solid fa-check"></i> Complemented with peer perspectives and advice
    </h5>
  </div>
</div>

<div class="w-100 bg-primry mt-5 d-flex" style="height: 100px; padding: 0 80px">
  <div class="w-100 bg-succes" style="height: 100px">
    <h2 style="color: #000000; font-weight: 700">6,154</h2>
    <p style="color: #0b2653; font-weight: 500">
      Projects And Software<br />
      Developed in 2021
    </p>
  </div>
  <div class="w-100 bg-primry" style="height: 100px">
    <h2 style="color: #000000; font-weight: 700">2,512</h2>
    <p style="color: #0b2653; font-weight: 500">
      Projects And Software<br />
      Developed in 2021
    </p>
  </div>
  <div class="w-100 bg-ifo" style="height: 100px">
    <h2 style="color: #000000; font-weight: 700">1,784</h2>
    <p style="color: #0b2653; font-weight: 500">
      Satisfied Clients We <br />
      Have Served Globally
    </p>
  </div>
  <div class="w-100 bg-seondary" style="height: 100px">
    <h2 style="color: #000000; font-weight: 700">25</h2>
    <p style="color: #0b2653; font-weight: 500">
      Years Of experience In The<br />IT And Software Industry
    </p>
  </div>
</div>

<div
  class="w-100 bg-primry mt-5 d-flex"
  style="height: 160px; padding: 15px 30px; background-color: #0c2754"
>
  <div class="w-25 bg-sucess" style="height: 100px">
    <p style="font-size: 15px; color: #01c580; font-weight: 700">
      Ensure High Availability Of Your Services
    </p>
    <h5 style="font-size: 13px; color: #ffffff; font-weight: 700">Affordable Price</h5>
    <p style="font-size: 11px; color: #ffffff; font-weight: 500">
      There are many variations passages Ipsum <br />
      available, but the majority
    </p>
  </div>
  <div class="w-25 bg-primry" style="height: 100px; padding-top: 37px">
    <h5 style="font-size: 13px; color: #ffffff; font-weight: 700">High Technology</h5>
    <p style="font-size: 11px; color: #ffffff; font-weight: 500">
      There are many variations passages Ipsum <br />
      available, but the majority
    </p>
  </div>
  <div class="w-50 bg-inf" style="height: 100px; padding-top: 37px">
    <h4 style="font-size: 17px; color: #ffffff; font-weight: 700">
      Easy solutions for all difficult IT <br />problems, keep your business safe & <br />ensure
      high availability.
    </h4>
  </div>
</div>

<div class="bg-daner mt-5 w-100" style="height: 190px; text-align: center; padding-top: 60px">
  <p style="color: #01c881; font-weight: 700">Customer Testimonial</p>
  <h4 style="color: #0c2754; font-weight: 700">
    We Care About Our Customers <br />
    Experience Too
  </h4>
</div>

<div class="w-100 bg-dnger mt-4 d-flex" style="height: 220px; padding: 0 80px">
  <div class="w-100 bg-ino" style="height: 205px; background-color: #f9f9f9; padding: 0 30px">
    <div
      class="w-25 bg-daner"
      style="
        padding: 45px;
        height: 50px;
        border-radius: 50%;
        margin-top: -30px;
        background-image: url(/Ellipse\ 64.png);
        background-size: cover;
      "
    ></div>
    <div class="w-100 bg-priary" style="height: 70px; border-bottom: 1px solid #8a8686">
      <p style="font-size: 12px; color: #000000; font-weight: 700; margin-top: 10px">
        There are many variations passages of Lorem <br />
        Ipsum available, but the majority have suffered<br />
        alteration in some form, by injected or
      </p>
    </div>
    <div class="w-100 bg-wrning" style="height: 50px">
      <h4 style="font-size: 17px; margin-top: 8px; color: #000000; font-weight: 700">
        Karla Lynn
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
      </h4>
      <p style="color: #8a8686; font-size: 10px; font-weight: 600">
        Sholl's Colonial Cafeteria
      </p>
    </div>
  </div>

  <div
    class="w-100 bg-ino"
    style="height: 205px; background-color: whitesmoke; padding: 0 30px; margin-left: 10px"
  >
    <div
      class="w-25 bg-daner"
      style="
        padding: 45px;
        height: 50px;
        border-radius: 50%;
        margin-top: -30px;
        background-image: url(/Ellipse\ 65.png);
        background-size: cover;
      "
    ></div>
    <div class="w-100 bg-priary" style="height: 70px; border-bottom: 1px solid #8a8686">
      <p style="font-size: 12px; color: #000000; font-weight: 700; margin-top: 10px">
        There are many variations passages of Lorem <br />
        Ipsum available, but the majority have suffered<br />
        alteration in some form, by injected or
      </p>
    </div>
    <div class="w-100 bg-wrning" style="height: 50px">
      <h4 style="font-size: 17px; margin-top: 8px; color: #000000; font-weight: 700">
        Tomas Campbell &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
      </h4>
      <p style="color: #8a8686; font-size: 10px; font-weight: 600">Service technician</p>
    </div>
  </div>

  <div
    class="w-100 bg-ino"
    style="height: 205px; background-color: whitesmoke; padding: 0 30px; margin-left: 10px"
  >
    <div
      class="w-25 bg-daner"
      style="
        padding: 45px;
        height: 50px;
        border-radius: 50%;
        margin-top: -30px;
        background-image: url(Ellipse\ 66.png);
        background-size: cover;
      "
    ></div>
    <div class="w-100 bg-priary" style="height: 70px; border-bottom: 1px solid #8a8686">
      <p style="font-size: 12px; color: #000000; font-weight: 700; margin-top: 10px">
        There are many variations passages of Lorem <br />
        Ipsum available, but the majority have suffered<br />
        alteration in some form, by injected or
      </p>
    </div>
    <div class="w-100 bg-wrning" style="height: 50px">
      <h4 style="font-size: 17px; margin-top: 8px; color: #000000; font-weight: 700">
        Robert Ocampo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-solid fa-star" style="font-size: 9px; color: #01c881"></i>
        <i
          class="fa-solid fa-star"
          style="font-size: 9px; color: #01c881; font-weight: 700"
        ></i>
        <i
          class="fa-solid fa-star"
          style="font-size: 9px; color: #01c881; font-weight: 700"
        ></i>
        <i
          class="fa-solid fa-star"
          style="font-size: 9px; color: #01c881; font-weight: 700"
        ></i>
        <i
          class="fa-solid fa-star"
          style="font-size: 9px; color: #01c881; font-weight: 700"
        ></i>
      </h4>
      <p style="color: #8a8686; font-size: 10px; font-weight: 600">Aquatic biologist</p>
    </div>
  </div>
</div>

<div class="bg-daner w-100" style="height: 190px; text-align: center; padding-top: 60px">
  <p style="color: #01c881; font-weight: 700">Recent Articles</p>
  <h4 style="color: #0c2754; font-weight: 700">Resourse Library</h4>
</div>

<div class="w-100 bg-dangr d-flex" style="height: 200px">
  <img style="width: 100% !important; height: 100% !important " src="/Rectangle 150.png" />
  <div class="w-100 bg-ino" style="height: 200px; margin-left: 10px">
    <img style="width: 100% !important; height: 100% !important " src="/Rectangle 151.png" />
  </div>
  <div class="w-100 bg-pimary" style="height: 200px; margin-left: 5px">
    <img style="width: 100% !important; height: 100% !important " src="/Rectangle 152.png" />
  </div>
  <div class="w-100 bg-waning" style="height: 200px; margin-left: 5px">
    <img style="width: 100% !important; height: 100% !important " src="/Rectangle 153.png" />
  </div>
</div>

<div
  class="w-100 bg-da"
  style="
    height: 250px;
    margin-top: 200px;
    background-color: #0c2754;
    padding-top: 30px !important;
  "
>
  <p style="color: #01c680; font-weight: 700; text-align: center; font-size: 10px">
    Join Our Community
  </p>
  <h4 style="color: #ffffff; font-weight: 700; text-align: center">
    Get Best Advertiser <br />In Your Side Pocket
  </h4>
  <div
    class="input-group my-5 bg-secodary"
    style="margin-left: 495px; margin-top: 10px !important; width: 20%"
  >
    <input
      type="text"
      placeholder=" Enter your email address"
      class="form-control"
      style="
        color: #a99f9f4d;
        font-weight: 700;
        font-size: 6px;
        background-color: #ffffff;
        border-radius: 3px;
      "
    />
    <div class="input-group-prepend bg-warnng" style="margin-left: 5px">
      <span
        class="input-group-text"
        style="
          border-radius: 3px;
          background-color: #01c780;
          font-weight: small;
          font-size: 9px;
          border: none;
          color: white;
          cursor: pointer;
        "
        >Subscribe</span
      >
    </div>
  </div>
</div>

<div
  class="w-100 mt-5 d-flex bg-dager"
  style="height: 200px; justify-content: space-between; padding: 10px 10px"
>
  <div class="bg-priary" style="height: 50px; width: 60px; padding: 10px">
    <a href="homepage.html" class="card-link">
      <img style="width: 35px; height: 35px" src="/image 14.png"
    /></a>
  </div>
  <div class="bg-seconday d-flex" style="height: 150px; width: 780px; padding: 0 70px">
    <div class="w-100" style="height: 30px">
      <h6
        class="text-left text-dark"
        style="font-size: 12px; color: #000000; font-weight: bold"
      >
        Visit Link
      </h6>
      <br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
      >
        Privacy</a
      ><br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
        >Terms and Condition</a
      >
    </div>

    <div class="w-100" style="height: 30px">
      <h6
        class="text-left text-dark"
        style="font-size: 12px; color: #000000; font-weight: bold"
      >
        Company
      </h6>
      <br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
      >
        Home</a
      ><br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
        >About Us</a
      ><br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
        >Contact Us</a
      >
    </div>

    <div class="w-100" style="height: 30px">
      <h6
        class="text-left text-dark"
        style="font-size: 12px; color: #000000; font-weight: bold"
      >
        Contact
      </h6>
      <br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
      >
        +99 (0) 101 0000 888</a
      ><br />
      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
        >Info@yourdomain.com</a
      >
    </div>

    <div class="w-100" style="height: 30px">
      <h6
        class="text-left text-dark"
        style="font-size: 12px; color: #000000; font-weight: bold"
      >
        Address
      </h6>
      <br />

      <a
        class="text-left text-dark"
        style="font-size: 10px; color: #000000; font-weight: 600; cursor: pointer"
        >Patricia Amedee 4401 Waldeck Street</a
      >
      <a
        class="text-left text-dark"
        style="font-size: 9px; color: #000000; font-weight: 600; cursor: pointer"
        >Grapevine Nashville, Tx 76051</a
      >
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
name: 'HomePage',
data() {
return {
  username: '',
  token: ''
};
},
created() {
const storedUsername = localStorage.getItem('username');
const storedToken = localStorage.getItem('token');

if ( storedToken) {
  this.username = storedUsername;
  this.token = storedToken;
}
},
methods: {
handleAuth() {
if (this.token) {
localStorage.clear();
this.username = '';
this.token = '';
}
this.$router.push('/sign-in');
},
getStarted() {
  this.$router.push(this.token ? '/protected-route' : '/login');
},

}
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap');

* {
font-family: 'Space Grotesk', sans-serif;
margin: 0px;
padding: 0px;
}

body,
h1,
h2,
h3,
h4,
h5 {
font-family: 'SUSHI Stroke', sans-serif;
}
html {
scroll-behavior: smooth;
}
li {
margin-left: 20px;
padding-top: 15px;
font-size: 14px;
}
li a {
color: black;
}

h1,
h2,
h3,
h4,
h5,
h6 {
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;
color: #0c2753;
}
body {
font-family: 'Red Hat Display', sans-serif;
font-weight: 500;
color: #0c2753;
background-color: white;
}
</style>

































