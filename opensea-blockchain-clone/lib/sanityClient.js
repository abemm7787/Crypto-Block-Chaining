import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'iaexq2gd',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skT68esXo3jHaUgblCXhGoQAnuwoNUqfk8875d8JaLBAiyJNpIkruN98V0QKNk1k26osp0VGWSnwzxyaQAD2Ml8KyI9E8cGBRQW1WnZbkWRTVegsf0L201x6IzULfwMG7v6qWrH6kZRcq4BbFrZgAc48pqCuFsBnbN5VpYD5Qxu44XPvgZUw',
  useCdn: false,
})

