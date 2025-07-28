<template>
  <div>
    <nav class="navbar navbar-expand-lg  px-3">
  <div class="container-fluid">
    <!-- Brand / Logo -->
    <div class="d-flex align-items-center me-3" style="cursor: pointer;">
      <div @click="$router.push('/')" class="me-3">
        <a class="card-link">
          <img src="/image1.png" alt="logo" style="width: 45px; height: 45px;" />
        </a>
      </div>
      <div style="background-color: #0b2653; width: 1px; height: 25px;"></div>
    </div>

    <!-- Toggle button for mobile -->
   <!-- Toggle button for mobile -->
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
  aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation"
  style="background-color: #01c881; border: 2px solid #01c881; padding: 6px 10px; border-radius: 5px;">


  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512" style="filter: invert(1);">
	<path fill="none" stroke="#0c2753" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336" />
</svg>
 
</button>


    <!-- Navbar links and actions -->
    <div class="collapse navbar-collapse" id="mainNavbar">
      <!-- Centered Navigation links -->
      <ul
        class="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-4 text-center d-flex flex-column flex-lg-row align-items-center justify-content-center"
      >
        <li class="nav-item">
          <a class="nav-link fw-bold text-dark" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Blog</a>
        </li>
      </ul>

      <!-- Right-side user and button -->
      <div class="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
        <!-- User info -->
        <div class="d-flex align-items-center">
          <div class="me-2" style="width: 25px; height: 25px;">
            <img src="/user.png" alt="user" class="img-fluid rounded-circle" />
          </div>
          <a
            @click="handleAuth"
            class="fw-bold text-dark text-decoration-none"
            style="font-size: 14px; cursor: pointer;"
          >
            {{ token ? 'Sign out' : 'Sign in' }}
          </a>
        </div>

        <!-- Quote button -->
        <div
          @click="$router.push('/requestaquote')"
          class="btn btn-sm mt-2 mt-lg-0"
          style="background-color: #01c881; color: #ffffff; font-weight: bold; font-size: 12px; border-radius: 7px;"
        >
          Request a quote
        </div>
      </div>
    </div>
  </div>
</nav>







<div class="container-fluid py-5 px-3 px-md-5" >
  <div class="row align-items-center">
    <!-- Left Content -->
    <div class="col-12 col-lg-6 mb-5 mb-lg-0">
      <h6 style="color: #01c881; font-weight: 700;">Welcome To Our Website</h6>
      <h1 class="mt-3" style="color: #0c2753; font-size: 2.2rem; font-weight: 700;">
        Thinking Insights &<br />
        Verified Driven<br />
        Research Data!
      </h1>
      <p class="mt-3" style="font-size: 13px; color: #0c2753; font-weight: 500;">
        We are experienced professionals who understand that IT<br />
        services is changing, and are true partners who care about your<br />
        success. Our team provides a consultative approach on<br />
        emerging technology.
      </p>

      <!-- Buttons -->
      <div class="d-flex flex-wrap align-items-center gap-3 mt-4">
        <div
          @click="$router.push('/requestaquote')"
          class="btn"
          style="
            background-color: #01c881;
            border-radius: 7px;
            font-size: 13px;
            color: #ffffff;
            font-weight: bold;
            padding: 10px 24px;
            cursor: pointer;
          "
        >
          Request a quote
        </div>

        <div class="d-flex align-items-center" style="cursor: pointer;">
          <i class="fa-solid fa-circle-play" style="color: #0b2653; font-size: 30px;"></i>
          <p class="mb-0 ms-2" style="font-size: 13px; color: #0b2653; font-weight: 700;">
            Play Video
          </p>
        </div>
      </div>
    </div>

    <!-- Right Image Section -->
    <div class="col-12 col-lg-6 position-relative d-flex justify-content-center">
      <div class="position-relative" style="width: 100%; max-width: 460px;">
        <!-- Main Image -->
        <img
          src="/man.png"
          alt="Main"
          class="img-fluid w-100"
          style="object-fit: cover; height: auto;"
        />

        <!-- Floating HR Image (hidden on small screens) -->
        <img
          src="/hr.png"
          alt=""
          class="position-absolute d-none d-xl-block"
          style="height: 240px; bottom: -44px; left: -175px;"
        />

        <!-- Floating Card -->
        <div
          class="position-absolute d-none d-md-flex flex-column align-items-center shadow"
          style="
            top: 167px;
            right: -50px;
            background-color: #ffffff;
            padding: 16px;
            z-index: 2;
            width: 160px;
          "
        >
          <img src="/man1.png" alt="Card Avatar" class="img-fluid" />
          <h5 class="mt-2 mb-1" style="font-size: 10px; color: #0c2754; font-weight: 600;">
            ANTHONY HALL
          </h5>
          <p style="font-size: 9px; margin-bottom: 8px; color: #0c2754;">Photographer</p>
          <h3
            class="text-center"
            style="font-size: 12px; font-weight: 700; margin-bottom: 10px; color: #0c2754;"
          >
            10 Lifehacks If<br />
            You Decide Move<br />
            To Thailand
          </h3>
          <div
            class="btn"
            style="
              background-color: #01c881;
              border-radius: 3px;
              font-size: 9px;
              color: #ffffff;
              font-weight: bold;
              padding: 4px 10px;
            "
          >
            Read More
          </div>
        </div>
      </div>
    </div>
  </div>
</div>









<div class="container-fluid mt-5 py-5 text-center">
  <p class="text-success fw-bold mb-2" style="color: #01c881;">
    Nationworld Service, Local Expertise
  </p>
  <h2 class="fw-bold px-3 px-md-0" style="color: #0c2754; font-size: 1.5rem;">
    Our Technology Allows You To Offer The <br class="d-none d-md-block" />
    Latest Software To Possible<br class="d-none d-md-block" />
    Customers!
  </h2>
</div>










<div class="container-fluid  mt-5 px-4 px-lg-5 py-5">
  <div class="row text-center gy-4">
    
    <!-- IT Management -->
    <div class="col-12 col-md-4">
      <div class="mx-auto" style="height: 60px; width: 70px; background-color: yelow;">
        <img src="/Union.png" alt="" style="height: 100%; width: 100%;" />
      </div>
      <h3 class="mt-4 fw-bold" style="color: #0c2753;">IT Management <br /> Services</h3>
      <p class="mt-3 text-muted small" style="font-weight: 500;">
        IT management service that manages and <br />
        oversees the IT infrastructure of organization <br />
        responsible for network and operations which <br />
        includes data and communication.
      </p>
    </div>

    <!-- Cyber Security -->
    <div class="col-12 col-md-4">
      <div class="mx-auto" style="height: 60px; width: 70px; background-color: yelow;">
        <img src="/CYBER.png" alt="" style="height: 100%; width: 100%;" />
      </div>
      <h3 class="mt-4 fw-bold" style="color: #0c2753;">Cyber Security <br /> Services</h3>
      <p class="mt-3 text-muted small" style="font-weight: 500;">
        IT management service that manages and <br />
        oversees the IT infrastructure of organization <br />
        responsible for network and operations which <br />
        includes data and communication.
      </p>
    </div>

    <!-- Cloud Computing -->
    <div class="col-12 col-md-4">
      <div class="mx-auto" style="height: 60px; width: 70px; background-color: yelow;">
        <img src="/CLOUD.png" alt="" style="height: 100%; width: 100%;" />
      </div>
      <h3 class="mt-4 fw-bold" style="color: #0c2753;">Cloud Computing <br /> Services</h3>
      <p class="mt-3 text-muted small" style="font-weight: 500;">
        IT management service that manages and <br />
        oversees the IT infrastructure of organization <br />
        responsible for network and operations which <br />
        includes data and communication.
      </p>
    </div>

  </div>
</div>



















<div class="container-fluid mt-5 px-4 px-md-5">
  <div class="row text-center gy-4">
    
    <!-- IT Consulting Services -->
    <div class="col-12 col-md-4">
      <div class="h-100 p-3">
        <div class="mx-auto" style="height: 60px; width: 70px; background-color: yelow;">
          <img src="/Union1.png" alt="IT Consulting" style="height: 100%; width: 100%;" />
        </div>
        <h3 class="mt-4 fw-bold" style="color: #0c2753;">
          IT Consulting <br /> Services
        </h3>
        <p class="mt-3 small text-muted" style="font-weight: 500;">
          IT management service that manages and <br />
          oversees the IT infrastructure of organization <br />
          responsible for network and operations which <br />
          includes data and communication.
        </p>
      </div>
    </div>

    <!-- Software Development Services -->
    <div class="col-12 col-md-4">
      <div class="h-100 p-3">
        <div class="mx-auto" style="height: 60px; width: 70px; background-color: yelow;">
          <img src="/Union2.png" alt="Software Dev" style="height: 100%; width: 100%;" />
        </div>
        <h3 class="mt-4 fw-bold" style="color: #0c2753;">
          Software Dev <br /> Services
        </h3>
        <p class="mt-3 small text-muted" style="font-weight: 500;">
          IT management service that manages and <br />
          oversees the IT infrastructure of organization <br />
          responsible for network and operations which <br />
          includes data and communication.
        </p>
      </div>
    </div>

    <!-- Business Win Banner -->
    <div class="col-12 col-md-4">
      <div
        class="text-start text-white d-flex flex-column justify-content-center h-100 p-4"
        style="
          background-image: url('Rectangle 141.png');
          background-size: cover;
          background-position: center;
          border-radius: 6px;
          min-height: 350px;
        "
      >
        <h3 class="fw-bold">Help Your<br />Business Win!</h3>
        <p class="mt-2" style="font-size: 13px; font-weight: 300;">
          phlox is a trusted advisor and an objective <br />
          resource for more than 17,000 organizations in <br />
          90+ countries.
        </p>
        <a
          class="btn btn-sm mt-4"
          style="
            background-color: #ffffff;
            color: #01c881;
            font-weight: 700;
            font-size: 10px;
            width: fit-content;
          "
        >
          Find Your Solution
          <i class="fa-solid fa-arrow-right ms-2" style="color: #01c881;"></i>
        </a>
      </div>
    </div>

  </div>
</div>














<div class="container-fluid py-5 mt-3" style="background-color: #f9f9f9;">
  <div class="row align-items-center px-3 px-md-5 gy-5">

    <!-- Image & Card Section -->
    <div class="col-12 col-md-5 position-relative d-flex flex-column align-items-start">
      <img
        src="/image 13.png"
        alt="Case Study"
        class="img-fluid w-100"
        style="height: 400px; object-fit: cover;"
      />
      <div
        class="shadow rounded card-overlay"
        style="
          background-color: white;
          padding: 20px 15px;
          width: 80%;
          max-width: 320px;
          position: absolute;
          top: 280px;
          left: 0;
        "
      >
        <p class="fw-bold mb-2" style="font-size: 13px; color: #0c2754;">
          Thinking Phlox, Verified Driven <br />
          Research, And Metrics Data Help <br />
          You Make The Right Decisions!
        </p>
        <a
          href="#"
          class="btn btn-sm mt-2 d-inline-flex align-items-center"
          style="
            background-color: #fff;
            color: #01c881;
            font-weight: 700;
            font-size: 13px;
            border: 1px solid #01c881;
            transition: all 0.3s ease;
          "
          onmouseover="this.style.backgroundColor='#01c881'; this.style.color='#fff';"
          onmouseout="this.style.backgroundColor='#fff'; this.style.color='#01c881';"
        >
          Read Our Case Study
          <i class="fa-solid fa-arrow-right ms-2" style="font-size: 15px;"></i>
        </a>
      </div>
    </div>

    <!-- Text Section -->
    <div class="col-12 col-md-7">
      <p class="fw-bold mb-2" style="font-size: 13px; color: #01c881;">
        Trusted By The World's Best Organization
      </p>
      <h2 class="fw-bold mb-3" style="font-size: 25px; color: #0c2754;">
        Manages Service Delivery Across <br />
        Various Business Like, HR, Legal <br />
        And Other IT Departments!!
      </h2>
      <h6 class="fw-bold mb-3" style="font-size: 12px; color: #0c2754;">
        Phlox has been helping organizations throughout the world to manage <br />
        their IT with our unique approach to technology management and <br />
        consultancy solutions.
      </h6>
      <p class="mb-3" style="font-size: 11px; color: #0c2754; font-weight: 500;">
        As one of the world's largest ITService Providers, our deep pool of over 130 <br />
        certified engineers and IT support staff are ready to help.
      </p>
      <h5 class="mb-2" style="font-size: 13px; color: #0c2754; font-weight: 700;">
        <i class="fa-solid fa-check me-2 text-success"></i>
        Delivered in more than 450,000 client's interactions
      </h5>
      <h5 class="mb-2" style="font-size: 13px; color: #0c2754; font-weight: 700;">
        <i class="fa-solid fa-check me-2 text-success"></i>
        Provided by experts to help challenge critical activities
      </h5>
      <h5 class="mb-0" style="font-size: 13px; color: #0c2754; font-weight: 700;">
        <i class="fa-solid fa-check me-2 text-success"></i>
        Complemented with peer perspectives and advice
      </h5>
    </div>

  </div>
</div>













<div class="container-fluid mt-5 py-4" >
  <div class="row text-center g-4 px-3 px-md-5">

    <div class="col-12 col-sm-6 col-md-3">
      <div class="p-3 h-100">
        <h2 class="fw-bold text-dark">6,154</h2>
        <p class="mb-0 text-primary fw-medium" style="font-size: 14px; color: #0b2653;font-weight: 500">
          Projects And Software <br />
          Developed in 2021
        </p>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-3">
      <div class="p-3 h-100">
        <h2 class="fw-bold text-dark">2,512</h2>
        <p class="mb-0 text-primary fw-medium" style="font-size: 14px;color: #0b2653;font-weight: 500">
          Projects And Software <br />
          Developed in 2021
        </p>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-3">
      <div class="p-3 h-100">
        <h2 class="fw-bold text-dark">1,784</h2>
        <p class="mb-0 text-primary fw-medium" style="font-size: 14px;color: #0b2653;font-weight: 500">
          Satisfied Clients We <br />
          Have Served Globally
        </p>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-3">
      <div class="p-3 h-100">
        <h2 class="fw-bold text-dark">25</h2>
        <p class="mb-0 text-primary fw-medium" style="font-size: 14px;color: #0b2653;font-weight: 500">
          Years Of Experience In The <br />
          IT And Software Industry
        </p>
      </div>
    </div>

  </div>
</div>






<div class="container-fluid mt-5 py-3" style="background-color: #0c2754;">
  <div class="row gy-3 px-3 px-md-5">

    <!-- Box 1 -->
    <div class="col-12 col-md-3">
      <p style="font-size: 15px; color: #01c580; font-weight: 700">
        Ensure High Availability Of Your Services
      </p>
      <h5 style="font-size: 13px; color: #ffffff; font-weight: 700">Affordable Price</h5>
      <p style="font-size: 11px; color: #ffffff; font-weight: 500">
        There are many variations passages Ipsum <br />
        available, but the majority
      </p>
    </div>

    <!-- Box 2 -->
    <div class="col-12 col-md-3 pt-md-3">
      <h5 style="font-size: 13px; color: #ffffff; font-weight: 700">High Technology</h5>
      <p style="font-size: 11px; color: #ffffff; font-weight: 500">
        There are many variations passages Ipsum <br />
        available, but the majority
      </p>
    </div>

    <!-- Box 3 -->
    <div class="col-12 col-md-6 pt-md-3">
      <h4 style="font-size: 17px; color: #ffffff; font-weight: 700">
        Easy solutions for all difficult IT <br />problems, keep your business safe & <br />ensure
        high availability.
      </h4>
    </div>

  </div>
</div>






<div class="bg-daner mt-5 w-100" style="height: 190px; text-align: center; padding-top: 60px">
  <p style="color: #01c881; font-weight: 700">Customer Testimonial</p>
  <h4 style="color: #0c2754; font-weight: 700">
    We Care About Our Customers <br />
    Experience Too
  </h4>
</div>

<div class="container-fluid mt-4 px-3">
  <div class="row g-3">
    <!-- Card 1 -->
    <div class="col-lg-4 col-md-6 col-12">
      <div class="bg-light p-3" style="height: 100%; background-color: #f9f9f9;">
        <div
          class="mx-auto mb-2"
          style="
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-top: -30px;
            background-image: url('/Ellipse 64.png');
            background-size: cover;
          "
        ></div>
        <div style="border-bottom: 1px solid #8a8686;">
          <p class="fw-bold text-dark" style="font-size: 12px; margin-top: 10px;">
            There are many variations passages of Lorem <br />
            Ipsum available, but the majority have suffered <br />
            alteration in some form, by injected or
          </p>
        </div>
        <div class="mt-2">
          <h4 style="font-size: 17px; color: #000000; font-weight: 700;">
            Karla Lynn
            <span class="float-end">
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
            </span>
          </h4>
          <p style="color: #8a8686; font-size: 10px; font-weight: 600;">Sholl's Colonial Cafeteria</p>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col-lg-4 col-md-6 col-12">
      <div class="bg-light p-3" style="height: 100%; background-color: #f9f9f9;">
        <div
          class="mx-auto mb-2"
          style="
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-top: -30px;
            background-image: url('/Ellipse 65.png');
            background-size: cover;
          "
        ></div>
        <div style="border-bottom: 1px solid #8a8686;">
          <p class="fw-bold text-dark" style="font-size: 12px; margin-top: 10px;">
            There are many variations passages of Lorem <br />
            Ipsum available, but the majority have suffered <br />
            alteration in some form, by injected or
          </p>
        </div>
        <div class="mt-2">
          <h4 style="font-size: 17px; color: #000000; font-weight: 700;">
            Tomas Campbell
            <span class="float-end">
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
            </span>
          </h4>
          <p style="color: #8a8686; font-size: 10px; font-weight: 600;">Service technician</p>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col-lg-4 col-md-6 col-12">
      <div class="bg-light p-3" style="height: 100%; background-color: #f9f9f9;">
        <div
          class="mx-auto mb-2"
          style="
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-top: -30px;
            background-image: url('/Ellipse 66.png');
            background-size: cover;
          "
        ></div>
        <div style="border-bottom: 1px solid #8a8686;">
          <p class="fw-bold text-dark" style="font-size: 12px; margin-top: 10px;">
            There are many variations passages of Lorem <br />
            Ipsum available, but the majority have suffered <br />
            alteration in some form, by injected or
          </p>
        </div>
        <div class="mt-2">
          <h4 style="font-size: 17px; color: #000000; font-weight: 700;">
            Robert Ocampo
            <span class="float-end">
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
              <i class="fa-solid fa-star" style="font-size: 9px; color: yellow;"></i>
            </span>
          </h4>
          <p style="color: #8a8686; font-size: 10px; font-weight: 600;">Aquatic biologist</p>
        </div>
      </div>
    </div>
  </div>
</div>




<div class="container-fluid bg-daner text-center py-5">
  <p class="fw-bold" style="color: #01c881;">Recent Articles</p>
  <h4 class="fw-bold" style="color: #0c2754;">Resourse Library</h4>
</div>


<div class="container-fluid mt-5">
  <div class="row g-2">
    <div class="col-12 col-sm-6 col-md-3">
      <img src="/Rectangle 150.png" class="img-fluid w-100 h-100" style="object-fit: cover; height: 200px" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <img src="/Rectangle 151.png" class="img-fluid w-100 h-100" style="object-fit: cover; height: 200px" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <img src="/Rectangle 152.png" class="img-fluid w-100 h-100" style="object-fit: cover; height: 200px" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <img src="/Rectangle 153.png" class="img-fluid w-100 h-100" style="object-fit: cover; height: 200px" />
    </div>
  </div>
</div>


<div
  class="w-100"
  style="background-color: #0c2754; padding: 40px 20px; margin-top: 200px"
>
  <p class="text-center" style="color: #01c680; font-weight: 700; font-size: 12px">
    Join Our Community
  </p>
  <h4 class="text-center text-white fw-bold mb-4" style="font-size: 20px">
    Get Best Advertiser <br />In Your Side Pocket
  </h4>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-5">
        <div class="input-group">
          <input
            type="text"
            placeholder="Enter your email address"
            class="form-control"
            style="
              font-size: 12px;
              font-weight: 600;
              background-color: #ffffff;
              color: #555;
              border-radius: 3px;
            "
          />
          <button
            class="btn"
            type="button"
            style="
              background-color: #01c780;
              color: white;
              font-size: 12px;
              font-weight: 600;
              border-radius: 3px;
              margin-left: 5px;
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</div>





<div class="w-100  mt-5 pt-4 pb-3" >
  <div class="container">
    <div class="row align-items-start">
      
      <!-- Logo -->
      <div class="col-12 col-md-2 mb-4 d-none d-md-flex justify-content-start">
  <a href="homepage.html">
    <img src="/image 14.png" alt="Logo" style="width: 35px; height: 35px;" />
  </a>
</div>


      <!-- Visit Link -->
      <div class="col-6 col-sm-3 col-md-2 mb-3">
        <h6 class="fw-bold text-dark" style="font-size: 12px; ">Visit Link</h6>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">Privacy</a>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">Terms and Condition</a>
      </div>

      <!-- Company -->
      <div class="col-6 col-sm-3 col-md-2 mb-3">
        <h6 class="fw-bold" style="font-size: 12px;">Company</h6>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">Home</a>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">About Us</a>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">Contact Us</a>
      </div>

      <!-- Contact -->
      <div class="col-6 col-sm-3 col-md-3 mb-3">
        <h6 class="fw-bold" style="font-size: 12px;">Contact</h6>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">+99 (0) 101 0000 888</a>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">Info@yourdomain.com</a>
      </div>

      <!-- Address -->
      <div class="col-6 col-sm-3 col-md-3 mb-3">
        <h6 class="fw-bold" style="font-size: 12px;">Address</h6>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 10px; cursor: pointer;">Patricia Amedee 4401 Waldeck Street</a>
        <a href="#" class="d-block text-dark fw-semibold" style="font-size: 9px; cursor: pointer;">Grapevine Nashville, Tx 76051</a>
      </div>

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
@media (max-width: 767.98px) {
    .card-overlay {
      position: static !important;
      width: 100% !important;
      max-width: 100% !important;
      margin-top: 20px;
    }
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
