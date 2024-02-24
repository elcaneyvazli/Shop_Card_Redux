/* eslint-disable react/prop-types */
import { IconButton, Typography } from "@material-tailwind/react";

export default function SimplePagination({ quantity, increment, decrement }) {
  return (
    <div className="flex items-center gap-8">
      <IconButton size="sm" variant="outlined" onClick={decrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>
      <Typography color="gray" className="font-normal">
        {quantity}
      </Typography>
      <IconButton size="sm" variant="outlined" onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>
    </div>
  );
}
