import { Disclosure } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Example1 from './Examples/Example1/Example1'

function App() {

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800 holas">
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
           <Example1 />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
