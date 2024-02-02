import Link from 'next/link'
import { Lilita_One } from 'next/font/google'

import { GoBack } from './Icons';

const font = Lilita_One({ weight: "400", subsets: ['latin'] })

const CmsNavbar = () => {
  return (
    <div className='flex justify-between items-center py-1 px-5'>
      <Link href="/">
        <GoBack/>

      </Link>
      <div className={`${font.className} text-3xl dark:text-amber-50`}>Kavisankar |
          <span className='text-purple-500'> Blog</span>
        </div>
    </div>
  )
}

export default CmsNavbar
