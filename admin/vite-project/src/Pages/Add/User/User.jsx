import React, { useState, useEffect } from 'react';
import './User.css';

const API_URL = 'http://localhost:6060'; // Update with your backend URL

const User = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Stores the user being edited
    const [updatedName, setUpdatedName] = useState("");
    const [updatedEmail, setUpdatedEmail] = useState("");

    // Fetch Users from Backend
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${API_URL}/users`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // ✅ Function to Delete User
    const deleteUser = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            const response = await fetch(`${API_URL}/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUsers(users.filter(user => user._id !== id)); // Remove user from UI
                alert("User deleted successfully!");
            } else {
                alert("Failed to delete user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // ✅ Enable Edit Mode
    const enableEdit = (user) => {
        setEditingUser(user._id);
        setUpdatedName(user.name);
        setUpdatedEmail(user.email);
    };

    // ✅ Function to Update User
    const updateUser = async (id) => {
        try {
            const response = await fetch(`${API_URL}/users/${id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: updatedName, email: updatedEmail }),
            });

            if (response.ok) {
                setUsers(users.map(user =>
                    user._id === id ? { ...user, name: updatedName, email: updatedEmail } : user
                ));
                alert("User updated successfully!");
                setEditingUser(null); // Exit edit mode
            } else {
                alert("Failed to update user");
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <>
            <center><h2>Admin Panel - User Data</h2></center>
            <table className="movie-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>
                                {editingUser === user._id ? (
                                    <input
                                        type="text"
                                        value={updatedName}
                                        onChange={(e) => setUpdatedName(e.target.value)}
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editingUser === user._id ? (
                                    <input
                                        type="email"
                                        value={updatedEmail}
                                        onChange={(e) => setUpdatedEmail(e.target.value)}
                                    />
                                ) : (
                                    user.email
                                )}
                            </td>
                            <td>
                                {editingUser === user._id ? (
                                    <button className="btn save" onClick={() => updateUser(user._id)}>Save</button>
                                ) : (
                                    <>
                                        <button className="btn update" onClick={() => enableEdit(user)}>Update</button>
                                        <button className="btn delete" onClick={() => deleteUser(user._id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default User;
