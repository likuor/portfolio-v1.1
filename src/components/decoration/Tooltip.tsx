type Props = {
  language: string;
  children: JSX.Element;
};

const Tooltip = ({ language, children }: Props) => (
  <span className='relative group'>
    <span
      className={[
        'whitespace-nowrap',
        'rounded',
        'bg-sub',
        'text-xs',
        'px-2',
        'py-1',
        'text-secondary',
        'absolute',
        '-top-8',
        'left-1/2',
        '-translate-x-1/2',
        "before:content-['']",
        'before:absolute',
        'before:-translate-x-1/2',
        'before:left-1/2',
        'before:top-full',
        'before:border-4',
        'before:border-transparent',
        'before:border-t-sub',
        'opacity-0',
        'group-hover:opacity-100',
        'transition',
        'pointer-events-none',
      ].join(' ')}
    >
      {language}
    </span>
    <span className='transition hover:text-sub'>{children}</span>
  </span>
);

export default Tooltip;
