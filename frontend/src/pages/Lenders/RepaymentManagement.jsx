import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepaymentManagement = () => {
    const [repayments, setRepayments] = useState([]);

    useEffect(() => {
        // Fetch repayment data for the logged-in lender
        const fetchRepayments = async () => {
            try {
                const response = await axios.get('/api/repayments');
                setRepayments(response.data);
            } catch (error) {
                console.error('Error fetching repayments:', error);
            }
        };
        fetchRepayments();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Repayment Management</h2>
            {repayments.length === 0 ? (
                <p>No repayments found.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Loan ID</th>
                            <th className="py-2 px-4 border-b">Borrower</th>
                            <th className="py-2 px-4 border-b">Amount Repaid</th>
                            <th className="py-2 px-4 border-b">Repayment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repayments.map((repayment) => (
                            <tr key={repayment.id}>
                                <td className="py-2 px-4 border-b">{repayment.loanId}</td>
                                <td className="py-2 px-4 border-b">{repayment.borrowerName}</td>
                                <td className="py-2 px-4 border-b">{repayment.amount}</td>
                                <td className="py-2 px-4 border-b">{new Date(repayment.repaymentDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default RepaymentManagement;