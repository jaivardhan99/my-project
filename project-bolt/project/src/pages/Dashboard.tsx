import React from 'react';
import { ArrowUpRight, ArrowDownRight, IndianRupee, Percent, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Financial Dashboard</h1>
      
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Portfolio Value Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                
                <IndianRupee className="h-6 w-6 text-gray-400"/>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Portfolio Value</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900"> ₹23,458</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <ArrowUpRight className="h-5 w-5 flex-shrink-0" />
                      <span className="sr-only">Increased by</span>
                      3.2%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Returns Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Percent className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Monthly Returns</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">+5.2%</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                      <ArrowDownRight className="h-5 w-5 flex-shrink-0" />
                      <span className="sr-only">Decreased by</span>
                      1.1%
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Market Trend Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Market Trend</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">Bullish</div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      <ArrowUpRight className="h-5 w-5 flex-shrink-0" />
                      Strong
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Section */}
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900">AI Insights</h2>
        <div className="mt-3 bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">
            Based on your portfolio performance and market conditions, here are your personalized insights:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-green-500">•</span>
              <span className="ml-3 text-gray-700">
                Consider increasing your technology sector allocation by 5% to optimize returns
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-yellow-500">•</span>
              <span className="ml-3 text-gray-700">
                Your emergency fund is below the recommended 6-month expenses threshold
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-blue-500">•</span>
              <span className="ml-3 text-gray-700">
                Market volatility is expected to increase - consider reviewing your risk tolerance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;