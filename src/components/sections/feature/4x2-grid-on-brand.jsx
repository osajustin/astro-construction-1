import {
    ArrowUturnLeftIcon,
    ChatBubbleLeftEllipsisIcon,
    DocumentChartBarIcon,
    HeartIcon,
    InboxIcon,
    PencilSquareIcon,
    TrashIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Unlimited Inboxes',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: InboxIcon,
    },
    {
      name: 'Manage Team Members',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: UsersIcon,
    },
    {
      name: 'Spam Report',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: TrashIcon,
    },
    {
      name: 'Compose in Markdown',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: PencilSquareIcon,
    },
    {
      name: 'Team Reporting',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: DocumentChartBarIcon,
    },
    {
      name: 'Saved Replies',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ArrowUturnLeftIcon,
    },
    {
      name: 'Email Commenting',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ChatBubbleLeftEllipsisIcon,
    },
    {
      name: 'Connect with Customers',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: HeartIcon,
    },
  ]
  
  export default function Feature4x2GridOnBrand() {
    return (
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
          <h2 className="text-4xl font-bold tracking-tight text-white">Inbox support built for efficiency.</h2>
          <p className="mt-6 max-w-3xl text-lg/8 text-indigo-200">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam
            sit nisl euismod mattis in.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white/10">
                    <feature.icon aria-hidden="true" className="size-8 text-white" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg/8 font-semibold text-white">{feature.name}</h3>
                  <p className="mt-2 text-base/7 text-indigo-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  