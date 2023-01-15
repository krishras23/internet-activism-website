const Website = () => {
  return (
    <div className="flex flex-col items-center bg-black-100">
      <div className="text-center pt-48 pl-10% pr-10% leading-1.2 sm:pr-5% text-4xl font-medium">We're behind some of the most impactful <br /> digital activism projects<span className="text-green-500">.</span></div>
      <br></br>
      <div className="w-3/4 text-center text-green-500">Learn about our mission</div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-row items-center mt-4">
        <div className="w-2/3">
          <img src="/ukraine.png" className="w-full width: 500px height: 500px" />
        </div>
        <div className="w-2/4 text-center pl-4">
          <h2 className="text-left text-2xl font-medium ml-5">Last year, we housed<br /> over  100,000 refugees through the internet.</h2>
          <br></br>
          <p className="text-left text-gray-700 ml-5">In response to the war in Ukraine, we launched UkrainelakeShelter.com, a platform for refugees to find housing online</p>
          <br></br>
          <a href="https://www.ukrainetakeshelter.com//">
            <p className="text-left text-gray-700 ml-5">See how we did it <img src="/juice.svg" className="inline-block align-text-top" style={{ transform: "rotate(180deg)", marginLeft: "5px" }} alt="arrow pointing left" /></p>
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-row items-center mt-4">
        <div className="w-2/3 text-left">
          <h2 className="text-4xl text-left font-medium">Get Involved<span className="text-green-500">.</span></h2>
        </div>
        <div className="w-1/10">
          <img src="/world.png" className=" w-1284 h-430" />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex flex-row items-stretch mt-4">
        <div className="w-1/3 text-left">
          <h3 className="text-2xl font-medium">Community<span className="text-green-500">.</span></h3>
          <br></br>
          <p className="text-gray-700 text-sm">Join our worldwide community of<br /> engineers and designers working to <br/> solve the world's biggest problems.</p>
          <br></br>
          <a href="https://discord.internetactivism.org/">
            <img src="/arrow.png" className="w-2 h-2" />
            <p className="text-gray-700">Join Discord</p>
          </a>

        </div>
        <div className="w-1/3 text-left">
          <h3 className="text-2xl font-medium">Contribute<span className="text-green-500">.</span></h3>
          <br></br>
          <p className="text-gray-700 text-sm">Help make internetActivism projects  <br/> easy to use by contributing to our <br /> open source work on Github.</p>
          <br></br>
          <a href="https://github.com/InternetActivism/">
            <p className="text-gray-700">See our GitHub Org.</p>
          </a>
        </div>
        <div className="w-1/3 text-left">
          <h3 className="text-2xl font-medium">Follow<span className="text-green-500">.</span></h3>
          <br></br>
          <p className="text-gray-700 text-sm">Stay up-to-date with new launches & InternetActivism news by following us on Twitter!</p>
          <br></br>
          <a href="https://twitter.com/internetactvsm/">
            <p className="text-gray-700">Follow us on Twitter</p>
          </a>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Website;
