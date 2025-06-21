import CustomSelect from "@/components/customSelect";
import { memberRole } from "@/static/dashboard/teamManagement"; // Ensure this is an array of objects { value: string, label: string }
import React, { useState } from "react";
import { FiShield, FiUser, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { FaCrown, FaUser } from "react-icons/fa";

export default function TeamManagement() {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMemberWalletAddress, setNewMemberWalletAddress] = useState("");
  const [newMemberUsername, setNewMemberUsername] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("Member");
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      username: "admin_user",
      wallet: "8vK7...2mPq",
      fullWallet: "8vK7sGHJkL9mNpQrStUvWxYz2mPq",
      role: "Owner",
      joinedAt: "2025-01-15",
      status: "Active",
    },
    {
      id: 2,
      username: "team_member",
      wallet: "5nM2...8kLp",
      fullWallet: "5nM2tFhGjK8kLpRqWxYz9vCd8kLp",
      role: "Member",
      joinedAt: "2025-02-01",
      status: "Active",
    },
  ]);

  const totalMembers = teamMembers.length;
  const teamAdmin = teamMembers.filter((m) => m.role === "Admin").length;
  const teamMember = teamMembers.filter((m) => m.role === "Member").length;
  //   const activeMembers = teamMembers.filter((m) => m.status === "Active").length;

  const handleAddMember = () => {
    if (newMemberWalletAddress.trim() && newMemberUsername.trim()) {
      const newMember = {
        id:
          teamMembers.length > 0
            ? Math.max(...teamMembers.map((m) => m.id)) + 1
            : 1,
        username: newMemberUsername.trim(),
        wallet:
          newMemberWalletAddress.slice(0, 4) +
          "..." +
          newMemberWalletAddress.slice(-4),
        fullWallet: newMemberWalletAddress,
        role: newMemberRole,
        joinedAt: new Date().toISOString().split("T")[0],
        status: "Active",
      };
      setTeamMembers([...teamMembers, newMember]);
      setNewMemberWalletAddress("");
      setNewMemberUsername("");
      setNewMemberRole("Member");
      setShowAddMemberModal(false);
    }
  };

  const handleRemoveMember = (id) => {
    const memberToRemove = teamMembers.find((member) => member.id === id);
    if (memberToRemove && memberToRemove.role === "Owner" && teamMember === 1) {
      alert("Cannot remove the Owner");
      return;
    }
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleRoleChange = (id, newRole) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id ? { ...member, role: newRole } : member
      )
    );
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "Owner":
        return <FaCrown className="w-4 h-4 text-yellow-500" />;
      case "Admin":
        return <FiShield className="w-4 h-4 text-blue-500" />;
      default:
        return <FiUser className="w-4 h-4 text-green-500" />;
    }
  };

  const getRoleBadgeStyle = (role) => {
    switch (role) {
      case "Owner":
        return "bg-yellow-100 text-yellow-800";
      case "Admin":
        return "bg-blue-100 text-blue-800";
      case "Member":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex-1 p-8 text-[#111827]">
      <div className="flex items-center justify-between mb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-xs">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-2">
              Team Management
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage team members and their permissions (Pro Feature)
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowAddMemberModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
        >
          <FiPlusCircle className="w-4 h-4" />
          Add Member
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-semibold text-gray-900">
              {totalMembers}
            </div>
            <div className="text-sm text-gray-600">Total Users</div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-semibold text-gray-900">
              {teamAdmin}
            </div>
            <div className="text-sm text-gray-600">Admins</div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-semibold text-gray-900">
              {teamMember}
            </div>
            <div className="text-sm text-gray-600">Members</div>
          </div>
        </div>

        {showAddMemberModal && (
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add Team Member
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={newMemberUsername}
                    onChange={(e) => setNewMemberUsername(e.target.value)}
                    placeholder="Enter username..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="walletAddress"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phantom Wallet Address
                  </label>
                  <input
                    type="text"
                    id="walletAddress"
                    value={newMemberWalletAddress}
                    onChange={(e) => setNewMemberWalletAddress(e.target.value)}
                    placeholder="Enter wallet address..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <CustomSelect
                    label="Role"
                    value={newMemberRole}
                    options={memberRole}
                    onChange={(val) => setNewMemberRole(val)}
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddMemberModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMember}
                  disabled={
                    !newMemberWalletAddress.trim() || !newMemberUsername.trim()
                  }
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Add Member
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="border border-gray-200 rounded-lg overflow-visible">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h3 className="font-medium text-gray-900">Team Members</h3>
          </div>

          <div className="divide-y divide-gray-200">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  index === teamMembers.length - 1 ? "overflow-visible" : ""
                }`}
                style={{
                  position: "relative",
                  zIndex: teamMembers.length - index,
                }}
              >
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiUser className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-900 truncate">
                      {member.username}
                    </div>
                    <div
                      className="text-sm text-gray-500 truncate"
                      title={member.fullWallet}
                    >
                      {member.wallet}
                    </div>
                    <div className="text-xs text-gray-400">
                      Joined {member.joinedAt}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="min-w-[140px] relative">
                    <CustomSelect
                      value={member.role}
                      options={memberRole}
                      onChange={(val) => handleRoleChange(member.id, val)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-1 min-w-[110px]">
                    {getRoleIcon(member.role)}
                    <span
                      className={`px-3 py-2 rounded-full text-xs font-medium text-center flex-1 ${getRoleBadgeStyle(member.role)}`}
                    >
                      {member.role}
                    </span>
                  </div>

                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                      member.role === "Owner" && teamMember === 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-400 hover:text-red-500 hover:bg-red-50 cursor-pointer"
                    }`}
                    disabled={member.role === "Owner" && teamMember === 1}
                    title={
                      member.role === "Owner" && teamMember === 1
                        ? "Cannot remove Owner"
                        : "Remove member"
                    }
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Permission Levels</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>
              <span className="font-medium">Owner:</span> Full control over the
              organization, can delete and transfer ownership.
            </div>
            <div>
              <span className="font-medium">Admin:</span> Full access to all
              features and team management.
            </div>
            <div>
              <span className="font-medium">Member:</span> Access to most
              features, cannot manage team.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
