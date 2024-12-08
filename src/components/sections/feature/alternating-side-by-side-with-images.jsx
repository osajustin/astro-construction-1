import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
  } from '@heroicons/react/24/outline'
  
  const transferFeatures = [
    {
      id: 1,
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      id: 2,
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      id: 3,
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: BoltIcon,
    },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Reminder emails',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: EnvelopeIcon,
    },
  ]
  
  export default function FeatureAlternatingSideBySiddeWithImages() {
    return (
      <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
          <svg
            fill="none"
            width={404}
            height={784}
            viewBox="0 0 404 784"
            aria-hidden="true"
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          >
            <defs>
              <pattern
                x={0}
                y={0}
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
              </pattern>
            </defs>
            <rect fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" width={404} height={784} />
          </svg>
  
          <div className="relative">
            <h2 className="text-center text-3xl/8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in,
              accusamus quisquam.
            </p>
          </div>
  
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Transfer funds world-wide</h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                Totam, velit.
              </p>
  
              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex size-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                        <item.icon aria-hidden="true" className="size-8" />
                      </div>
                      <p className="ml-16 text-lg/6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div aria-hidden="true" className="relative -mx-4 mt-10 lg:mt-0">
              <svg
                fill="none"
                width={784}
                height={404}
                viewBox="0 0 784 404"
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              >
                <defs>
                  <pattern
                    x={0}
                    y={0}
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                  </pattern>
                </defs>
                <rect fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" width={784} height={404} />
              </svg>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/features/feature-example-1.png"
                width={490}
                className="relative mx-auto"
              />
            </div>
          </div>
  
          <svg
            fill="none"
            width={404}
            height={784}
            viewBox="0 0 404 784"
            aria-hidden="true"
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          >
            <defs>
              <pattern
                x={0}
                y={0}
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
              </pattern>
            </defs>
            <rect fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" width={404} height={784} />
          </svg>
  
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Always in the loop</h3>
                <p className="mt-3 text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus,
                  cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
                </p>
  
                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex size-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                          <item.icon aria-hidden="true" className="size-8" />
                        </div>
                        <p className="ml-16 text-lg/6 font-medium text-gray-900">{item.name}</p>
                      </dt>
                      <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
  
              <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                <svg
                  fill="none"
                  width={784}
                  height={404}
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                >
                  <defs>
                    <pattern
                      x={0}
                      y={0}
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                    </pattern>
                  </defs>
                  <rect fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" width={784} height={404} />
                </svg>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/features/feature-example-2.png"
                  width={490}
                  className="relative mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  