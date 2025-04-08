

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";




export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const defaultTheme = 'light';
    let theme = localStorage.getItem('theme') || defaultTheme;

    if (theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setIsDarkMode(theme === 'dark');
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newTheme = checked ? 'dark' : 'light';
    setIsDarkMode(checked);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <Script src="/js/core.bundle.js" strategy="beforeInteractive" />
      <Script src="/js/apexcharts.min.js" strategy="afterInteractive" />
      <Script src="/js/general.js" strategy="afterInteractive" />
      <Script src="/js/demo1.js" strategy="afterInteractive" />

      <div className="flex grow w-100">
        <div
          className="sidebar dark:bg-coal-600 bg-light border-e border-e-gray-200 dark:border-e-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0"
          data-drawer="true"
          data-drawer-class="drawer drawer-start top-0 bottom-0"
          data-drawer-enable="true|lg:false"
          id="sidebar"
        >
          <div
            className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0"
            id="sidebar_header"
          >
            <Link className="dark:hidden" href="/backend/dashboard">
              <Image
                className="default-logo min-h-[22px] max-w-none"
                src="/img/logo.svg"
                width={100} height={100} alt="ok"
              />

              <Image
                className="small-logo min-h-[22px] max-w-none"
                src="/img/download.svg"
                width={30}
                height={30}
                alt="ok"
              />
            </Link>
            <Link className="hidden dark:block" href="/backend/dashboard">
              <Image
                className="default-logo min-h-[22px] max-w-none"
                src="/img/logo.svg"
                width={100}
                height={100}
                alt="ok"
              />
              <Image
                className="small-logo min-h-[22px] max-w-none"
                src="/img/download.svg"
                width={30}
                height={30}
                alt="ok"
              />
            </Link>
            <button
              className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4"
              data-toggle="body"
              data-toggle-class="sidebar-collapse"
              id="sidebar_toggle"
            >
              <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300 rtl:translate rtl:rotate-180 rtl:toggle-active:rotate-0"></i>
            </button>
          </div>
          <div
            className="sidebar-content flex grow shrink-0 py-5 pe-2"
            id="sidebar_content"
          >
            <div
              className="scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3"
              data-scrollable="true"
              data-scrollable-dependencies="#sidebar_header"
              data-scrollable-height="auto"
              data-scrollable-offset="0px"
              data-scrollable-wrappers="#sidebar_content"
              id="sidebar_scrollable"
            >
              {/* Sidebar Menu */}
              <div
                className="menu flex  flex-col grow gap-0.5"
                data-menu="true"
                data-menu-accordion-expand-all="false"
                id="sidebar_menu"
              >
                <div
                  className="menu-item  "
                >
                  <div
                    className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]"
                    tabIndex={0}
                  >
                    <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                      <i className="ki-filled ki-element-11 text-lg"></i>
                    </span>
                    <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                      Dashboards
                    </span>
                  </div>
                </div>



              </div>
              {/* End of Sidebar Menu */}
            </div>
          </div>
        </div>
        {/* End of Sidebar */}
        {/* Wrapper */}
        <div className="wrapper flex grow flex-col">
          {/* Header */}
          <header
            className="header fixed top-0 z-10 start-0 end-0 flex items-stretch shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]"
            data-sticky="true"
            data-sticky-class="shadow-sm"
            data-sticky-name="header"
            id="header"
          >
            {/* Container */}
            <div
              className="container-fixed flex justify-between items-stretch lg:gap-4"
              id="header_container"
            >
              {/* Mobile Logo */}
              <div className="flex gap-1 lg:hidden items-center -ms-1"></div>
              {/* End of Mobile Logo */}
              {/*Megamenu Contaoner*/}
              <div className="flex items-stretch" id="mega_menu_container"></div>
              {/*End of Megamenu Contaoner*/}
              {/* Topbar */}
              <div className="flex items-center gap-2 lg:gap-3.5">

                <div className="menu" data-menu="true">
                  <div
                    className="menu-item"
                    data-menu-item-offset="20px, 10px"
                    data-menu-item-offset-rtl="-20px, 10px"
                    data-menu-item-placement="bottom-end"
                    data-menu-item-placement-rtl="bottom-start"
                    data-menu-item-toggle="dropdown"
                    data-menu-item-trigger="click|lg:click"
                  >
                    <div className="menu-toggle btn btn-icon rounded-full">
                      <Image src='/img/profile.png' width={100} height={100} alt="ok" className="size-9 rounded-full border-2 border-success shrink-0" />
                    </div>
                    <div className="menu-dropdown menu-default light:border-gray-300 w-screen max-w-[250px]">
                      <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
                        <div className="flex items-center gap-2">
                          <Image
                            alt="ss"
                            className="size-9 rounded-full border-2 border-success"
                            src="/img/profile.png"
                            width={100}
                            height={100}
                          />
                          <div className="flex flex-col gap-1.5">
                            <span className="text-sm text-gray-800 font-semibold leading-none">
                              Cody Fisher
                            </span>
                            <span
                              className="text-xs text-gray-600 hover:text-primary font-medium leading-none"
                            >
                              c.fisher@gmail.com
                            </span>
                          </div>
                        </div>
                        <span className="badge badge-xs badge-primary badge-outline">
                          Pro
                        </span>
                      </div>
                      <div className="menu-separator"></div>
                      <div className="flex flex-col">
                        <div className="menu-item">
                          <Link
                            className="menu-link"
                            href="/backend/profile"
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-profile-circle"></i>
                            </span>
                            <span className="menu-title">Profil</span>
                          </Link>
                        </div>
                      </div>
                      <div className="menu-separator"></div>
                      <div className="flex flex-col">
                        <div className="menu-item mb-0.5">
                          <div className="menu-link">
                            <span className="menu-icon">
                              <i className="ki-filled ki-moon"></i>
                            </span>
                            <span className="menu-title">Dark Mode</span>
                            <label className="switch switch-sm">
                              <input
                                data-theme-state="dark"
                                data-theme-toggle="true"
                                checked={isDarkMode}
                                onChange={handleToggle}
                                name="check"
                                type="checkbox"
                                defaultValue={1}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="menu-item px-4 py-1.5">
                          <Link
                            className="btn btn-sm btn-light justify-center"
                            href="/backend/logout"
                          >
                            Log out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Topbar */}
            </div>
            {/* End of Container */}
          </header>
          {/* End of Header */}
          {/* Content */}
          <main className="grow content pt-5" id="content" role="content">
            {/* Container */}
            <div className="container-fixed" id="content_container"></div>
            {/* End of Container */}
            {/* Container */}
            <div className="container-fixed">
              <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-xl font-medium leading-none text-gray-900">
                    Dashboard
                  </h1>
                </div>
              </div>
            </div>
            {/* End of Container */}
            {/* Container */}
            <div className="container-fixed">
              <div className="grid gap-5 lg:gap-7.5" >
                {/* begin: grid */}
                <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
                  <div className="lg:col-span-1">
                    <div
                      className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch"
                    >
                      <div className="card flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                        <Image
                          alt=""
                          height={100}
                          width={100}
                          className="w-7 mt-4 ms-5"
                          src="/img/linkedin-2.svg"
                        />
                        <div className="flex flex-col gap-1 pb-4 px-5">
                          <span className="text-3xl font-semibold text-gray-900">
                            9.3k
                          </span>
                          <span className="text-2sm font-normal text-gray-700">
                            Amazing mates
                          </span>
                        </div>
                      </div>
                      <div className="card flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                        <Image
                          alt=""
                          height={100}
                          width={100}
                          className="w-7 mt-4 ms-5"
                          src="/img/youtube-2.svg"
                        />
                        <div className="flex flex-col gap-1 pb-4 px-5">
                          <span className="text-3xl font-semibold text-gray-900">
                            24k
                          </span>
                          <span className="text-2sm font-normal text-gray-700">
                            Lessons Views
                          </span>
                        </div>
                      </div>
                      <div className="card flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                        <Image
                          alt=""
                          height={100}
                          width={100}
                          className="w-7 mt-4 ms-5"
                          src="/img/instagram-03.svg"
                        />
                        <div className="flex flex-col gap-1 pb-4 px-5">
                          <span className="text-3xl font-semibold text-gray-900">
                            608
                          </span>
                          <span className="text-2sm font-normal text-gray-700">
                            New subscribers
                          </span>
                        </div>
                      </div>
                      <div className="card flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                        <Image
                          alt=""
                          width={100}
                          height={100}
                          className="dark:hidden w-7 mt-4 ms-5"
                          src="/img/tiktok.svg"
                        />
                        <div className="flex flex-col gap-1 pb-4 px-5">
                          <span className="text-3xl font-semibold text-gray-900">
                            2.5k
                          </span>
                          <span className="text-2sm font-normal text-gray-700">
                            Stream audience
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n          .entry-callout-bg {\n\t\tbackground-image: url('/img/ok.png');\n\t}\n\t.dark .entry-callout-bg {\n\t\tbackground-image: url('/img/ok.png');\n\t}\n         "
                      }}
                    />
                    <div className="card h-full h-full">
                      <div className="card-body p-10 bg-[length:80%] rtl:[background-position:-70%_25%] [background-position:175%_25%] bg-no-repeat entry-callout-bg">
                        <div className="flex flex-col justify-center gap-4">
                          <div className="flex -space-x-2">
                            <div className="flex">
                              <Image alt="ok" width={100} height={100}
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-10"
                                src="/img/300-1.png"
                              />
                            </div>
                            <div className="flex">
                              <Image alt="ok" width={100} height={100}
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-10"
                                src="/img/300-1.png"
                              />
                            </div>
                            <div className="flex">
                              <Image alt="ok" width={100} height={100}
                                className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-10"
                                src="/img/300-1.png"
                              />
                            </div>
                            <div className="flex">
                              <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-10 text-success-inverse text-xs ring-success-light bg-success">
                                S
                              </span>
                            </div>
                          </div>
                          <h2 className="text-1.5xl font-semibold text-gray-900">
                            Connect Today &amp; Join
                            <br />
                            the
                            <span className="link">
                              KeenThemes Network
                            </span>
                          </h2>
                          <p className="text-sm font-normal text-gray-700 leading-5.5">
                            Enhance your projects with premium themes and
                            <br />
                            templates. Join the KeenThemes community today
                            <br />
                            for top-quality designs and resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia, quod, autem ut nesciunt ipsum dolorem excepturi eius ducimus optio, itaque iste neque nihil obcaecati doloremque reprehenderit harum. Earum magni aperiam dolor mollitia similique perferendis praesentium quod reprehenderit, et, quidem dicta beatae sapiente soluta incidunt minima? Incidunt sunt eaque repellat veniam ducimus reiciendis totam ea earum, impedit error ipsam eum blanditiis vel quibusdam repudiandae reprehenderit amet illo tenetur in nulla cupiditate corrupti sit natus! Officia, vitae, porro cupiditate veniam facilis tempora similique earum libero aliquid dolore enim nemo atque totam mollitia voluptatibus quasi perferendis nam? Repellat laboriosam adipisci libero dolor!
              </div>
            </div>
            {/* End of Container */}
          </main>
          {/* End of Content */}
          {/* Footer */}
          <footer className="footer w-100" style={{ width: '100%' }}>
            <div className="container-fixed">
              <div className="flex flex-col md:flex-row justify-center  gap-3 py-5">
                <div className="flex order-2 md:order-1 gap-2 p-4 font-normal text-2sm">
                  <span className="text-gray-500 text-center">
                      Copyright 2025
                  </span>
                </div>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Wrapper */}
      </div>
      {/* End of Main */}


    </>
  );
}
