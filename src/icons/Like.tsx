export const LikeIcon = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 48 48'
      className={className}
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='4'
        d='m35.912 41.544l5.37-19A2 2 0 0 0 39.355 20h-11.48a1.094 1.094 0 0 1-1.066-1.34l.5-2.164c.458-1.985.605-4.03.436-6.06l-.092-1.103A5.02 5.02 0 0 0 26.2 6.2A4.096 4.096 0 0 0 23.304 5h-.24c-.657 0-1.262.356-1.58.93l-2.659 4.785a12.962 12.962 0 0 1-5.124 5.085l-6.659 3.63A2 2 0 0 0 6 21.188V41a2 2 0 0 0 2 2h25.987a2 2 0 0 0 1.924-1.456'
      ></path>
    </svg>
  )
}