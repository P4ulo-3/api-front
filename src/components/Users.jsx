import { useEffect, useState } from "react";

import { toast } from "react-toastify";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function FetchUser() {
    try {
      const response = await fetch("http://localhost:3000/clientes");
      const dataRes = await response.json();

      if (response.ok) {
        setUsers(dataRes.data);
        console.log("sucesso na requisição");
      }
    } catch (error) {
      toast.error("Erro na requisição");
    }
  }

  useEffect(() => {
    FetchUser();
  }, []);

  async function deleteUse(id, nome) {
    if (!id) return;
    try {
      await fetch(`http://localhost:3000/clientes/${id}`, {
        method: "DELETE",
      });
      FetchUser();
      toast.success(`Usuario ${nome} deletado com sucesso`);
    } catch (error) {
      toast.error("Erro ao deletar usuario");
    }
  }

  return (
    <div className=" h-[100vh] mx-auto bg-black px-4 md:px-8 flex justify-center items-center flex-col">
      <div className="items-start justify-between w-[80%] md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-200 text-xl font-bold sm:text-2xl">
            Team members
          </h3>
          <p className="text-gray-200 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add member
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border w-[80%] rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left w-[80%]">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Position</th>

              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-200 divide-y">
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <div>
                    <span className="block text-gray-300 text-sm font-medium">
                      {user.nome}
                    </span>
                    <span className="block text-gray-300 text-xs">
                      {user.telefone}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.departamento_id}
                </td>

                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => deleteUse(user.id, user.nome)}
                    className="cursor-pointer py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
