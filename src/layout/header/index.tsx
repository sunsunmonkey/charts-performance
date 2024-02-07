import { GithubOutlined } from '@ant-design/icons';

export const Header = () => {
  return (
    <div className=" x-0   fixed top-0  z-10 flex w-full items-center bg-violet-600   py-5 font-semibold text-white shadow-md shadow-violet-700">
      <div className="flex w-full justify-between px-8">
        performance for antvis
        <a
          href="#"
          className=" item-center flex text-2xl text-white"
          target="_blank"
          rel="noreferrer"
        >
          <GithubOutlined />
        </a>
      </div>
    </div>
  );
};
