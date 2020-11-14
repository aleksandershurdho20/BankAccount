import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#deposit">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Change account type</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Delete Account</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " href="#">Collect Interest</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
        </div>
    )
}
