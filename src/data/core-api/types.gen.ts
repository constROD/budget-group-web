// This file is auto-generated by @hey-api/openapi-ts

export type FeatureFlag = {
    id: string;
    created_at: string | null | string | unknown;
    updated_at: string | null | string | unknown;
    deleted_at: string | null | string | unknown;
    role: 'SUPER_ADMIN' | 'ADMIN' | 'USER';
    json: Array<('users:read:*' | 'users:write:*' | 'users:write:create' | 'users:write:update' | 'users:write:delete' | 'users:write:archive' | 'users:write:restore' | 'products:read:*')>;
};

export type role = 'SUPER_ADMIN' | 'ADMIN' | 'USER';

export type User = {
    id: string;
    created_at: string | null | string | unknown;
    updated_at: string | null | string | unknown;
    deleted_at: string | null | string | unknown;
    email: string;
    first_name: string | null;
    last_name: string | null;
    mobile_no: string | null;
    role: 'SUPER_ADMIN' | 'ADMIN' | 'USER';
};

export type Group = {
    id: string;
    created_at: string | null | string | unknown;
    updated_at: string | null | string | unknown;
    deleted_at: string | null | string | unknown;
    name: string;
    description: string | null;
    split_type: 'EQUAL' | 'PERCENTAGE' | 'EXACT';
    owner_id: string;
};

export type split_type = 'EQUAL' | 'PERCENTAGE' | 'EXACT';

export type GroupMember = {
    id: string;
    created_at: string | null | string | unknown;
    updated_at: string | null | string | unknown;
    deleted_at: string | null | string | unknown;
    percentage_share: number | null;
    exact_share: string | unknown;
    group_id: string;
    user_id: string;
};

export type GroupExpense = {
    id: string;
    created_at: string | null | string | unknown;
    updated_at: string | null | string | unknown;
    deleted_at: string | null | string | unknown;
    amount: string;
    expense_date: string | null | string | unknown;
    description: string | null;
    group_id: string;
    owner_id: string;
};

export type GetServerDateTimeResponse = string;

export type GetFeatureFlagsResponse = FeatureFlag;

export type PostAuthRegisterData = {
    requestBody?: {
        email: string;
        password: string;
    };
};

export type PostAuthRegisterResponse = string;

export type PostAuthLoginData = {
    requestBody?: {
        email: string;
        password: string;
    };
};

export type PostAuthLoginResponse = {
    access_token: string;
    refresh_token: string;
};

export type PostAuthRefreshResponse = {
    user: User;
    access_token: string;
    refresh_token: string;
};

export type PutAuthChangePasswordData = {
    requestBody?: {
        currentPassword: string;
        newPassword: string;
    };
};

export type PutAuthChangePasswordResponse = string;

export type DeleteAuthLogoutResponse = string;

export type GetMeResponse = User;

export type PutMeData = {
    requestBody?: {
        first_name?: string | null;
        last_name?: string | null;
    };
};

export type PutMeResponse = User;

export type GetUsersSearchData = {
    includeArchived?: 'true' | 'false';
    limit?: number | null;
    orderBy?: 'asc' | 'desc';
    page?: number | null;
    search?: string;
    sortBy?: 'id' | 'created_at' | 'updated_at' | 'deleted_at' | 'email' | 'first_name' | 'last_name' | 'mobile_no' | 'role';
};

export type GetUsersSearchResponse = {
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    records: Array<User>;
    total_records: number;
};

export type GetUsersData = {
    includeArchived?: 'true' | 'false';
    limit?: number | null;
    orderBy?: 'asc' | 'desc';
    page?: number | null;
    sortBy?: 'id' | 'created_at' | 'updated_at' | 'deleted_at' | 'email' | 'first_name' | 'last_name' | 'mobile_no' | 'role';
};

export type GetUsersResponse = {
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    records: Array<User>;
    total_records: number;
};

export type PostUsersData = {
    requestBody?: {
        email: string;
        role: 'SUPER_ADMIN' | 'ADMIN' | 'USER';
        first_name: string | null;
        last_name: string | null;
    };
};

export type PostUsersResponse = User;

export type GetUsersByUserIdData = {
    userId: string;
};

export type GetUsersByUserIdResponse = User;

export type PutUsersByUserIdData = {
    requestBody?: {
        first_name?: string | null;
        last_name?: string | null;
        role?: 'SUPER_ADMIN' | 'ADMIN' | 'USER';
    };
    userId: string;
};

export type PutUsersByUserIdResponse = User;

export type DeleteUsersByUserIdData = {
    userId: string;
};

export type DeleteUsersByUserIdResponse = User;

export type DeleteUsersByUserIdArchiveData = {
    userId: string;
};

export type DeleteUsersByUserIdArchiveResponse = User;

export type GetGroupsSearchData = {
    includeArchived?: 'true' | 'false';
    limit: string;
    orderBy?: 'asc' | 'desc';
    page: string;
    searchText?: string;
    sortBy?: 'id' | 'created_at' | 'updated_at' | 'deleted_at' | 'name' | 'description' | 'split_type' | 'owner_id';
};

export type GetGroupsSearchResponse = {
    records: Array<Group>;
    total_records: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
};

export type PostGroupsData = {
    requestBody?: {
        name: string;
        description: string | null;
        split_type: 'EQUAL' | 'PERCENTAGE' | 'EXACT';
    };
};

export type PostGroupsResponse = Group;

export type GetGroupsByGroupIdData = {
    groupId: string;
};

export type GetGroupsByGroupIdResponse = Group;

export type PutGroupsByGroupIdData = {
    groupId: string;
    requestBody?: {
        name?: string;
        description?: string | null;
        split_type?: 'EQUAL' | 'PERCENTAGE' | 'EXACT';
    };
};

export type PutGroupsByGroupIdResponse = Group;

export type DeleteGroupsByGroupIdData = {
    groupId: string;
};

export type DeleteGroupsByGroupIdResponse = {
    success: boolean;
    message: string;
};

export type PutGroupsByGroupIdArchiveData = {
    groupId: string;
};

export type PutGroupsByGroupIdArchiveResponse = Group;

export type GetGroupMembersSearchData = {
    groupId?: string;
    includeArchived?: 'true' | 'false';
    limit: string;
    orderBy?: 'asc' | 'desc';
    page: string;
    sortBy?: 'id' | 'created_at' | 'updated_at' | 'deleted_at' | 'percentage_share' | 'exact_share' | 'group_id' | 'user_id';
    userId?: string;
};

export type GetGroupMembersSearchResponse = {
    records: Array<GroupMember>;
    total_records: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
};

export type PostGroupMembersData = {
    requestBody?: {
        group_id: string;
        user_id: string;
        percentage_share: number | null;
        exact_share: string | unknown;
    };
};

export type PostGroupMembersResponse = GroupMember;

export type GetGroupMembersByGroupMemberIdData = {
    groupMemberId: string;
};

export type GetGroupMembersByGroupMemberIdResponse = GroupMember;

export type PutGroupMembersByGroupMemberIdData = {
    groupMemberId: string;
    requestBody?: {
        percentage_share?: number | null;
        exact_share?: string | unknown;
    };
};

export type PutGroupMembersByGroupMemberIdResponse = GroupMember;

export type DeleteGroupMembersByGroupMemberIdData = {
    groupMemberId: string;
};

export type DeleteGroupMembersByGroupMemberIdResponse = {
    success: boolean;
    message: string;
};

export type PutGroupMembersByGroupMemberIdArchiveData = {
    groupMemberId: string;
};

export type PutGroupMembersByGroupMemberIdArchiveResponse = GroupMember;

export type GetGroupExpensesSearchData = {
    endDate?: string;
    groupId?: string;
    includeArchived?: 'true' | 'false';
    limit: string;
    orderBy?: 'asc' | 'desc';
    ownerId?: string;
    page: string;
    searchText?: string;
    sortBy?: 'id' | 'created_at' | 'updated_at' | 'deleted_at' | 'amount' | 'expense_date' | 'description' | 'group_id' | 'owner_id';
    startDate?: string;
};

export type GetGroupExpensesSearchResponse = {
    records: Array<GroupExpense>;
    total_records: number;
    total_pages: number;
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
};

export type PostGroupExpensesData = {
    requestBody?: {
        group_id: string;
        amount: string;
        expense_date: string | null | string | unknown;
        description: string | null;
    };
};

export type PostGroupExpensesResponse = GroupExpense;

export type GetGroupExpensesByGroupExpenseIdData = {
    groupExpenseId: string;
};

export type GetGroupExpensesByGroupExpenseIdResponse = GroupExpense;

export type PutGroupExpensesByGroupExpenseIdData = {
    groupExpenseId: string;
    requestBody?: {
        amount?: string;
        expense_date?: string | null | string | unknown;
        description?: string | null;
    };
};

export type PutGroupExpensesByGroupExpenseIdResponse = GroupExpense;

export type DeleteGroupExpensesByGroupExpenseIdData = {
    groupExpenseId: string;
};

export type DeleteGroupExpensesByGroupExpenseIdResponse = {
    success: boolean;
    message: string;
};

export type PutGroupExpensesByGroupExpenseIdArchiveData = {
    groupExpenseId: string;
};

export type PutGroupExpensesByGroupExpenseIdArchiveResponse = GroupExpense;

export type $OpenApiTs = {
    '/server/date-time': {
        get: {
            res: {
                /**
                 * Server date time retrieved successfully
                 */
                200: string;
            };
        };
    };
    '/feature-flags': {
        get: {
            res: {
                /**
                 * Feature flag retrieved successfully
                 */
                200: FeatureFlag;
            };
        };
    };
    '/auth/register': {
        post: {
            req: PostAuthRegisterData;
            res: {
                /**
                 * Account registered successfully
                 */
                201: string;
            };
        };
    };
    '/auth/login': {
        post: {
            req: PostAuthLoginData;
            res: {
                /**
                 * Login successfully
                 */
                200: {
                    access_token: string;
                    refresh_token: string;
                };
            };
        };
    };
    '/auth/refresh': {
        post: {
            res: {
                /**
                 * Session refreshed successfully
                 */
                200: {
                    user: User;
                    access_token: string;
                    refresh_token: string;
                };
            };
        };
    };
    '/auth/change-password': {
        put: {
            req: PutAuthChangePasswordData;
            res: {
                /**
                 * Password changed successfully
                 */
                200: string;
            };
        };
    };
    '/auth/logout': {
        delete: {
            res: {
                /**
                 * Logout successful
                 */
                200: string;
            };
        };
    };
    '/me': {
        get: {
            res: {
                /**
                 * My profile retrieved successfully
                 */
                200: User;
            };
        };
        put: {
            req: PutMeData;
            res: {
                /**
                 * My profile updated successfully
                 */
                200: User;
            };
        };
    };
    '/users/search': {
        get: {
            req: GetUsersSearchData;
            res: {
                /**
                 * Users retrieved successfully
                 */
                200: {
                    total_pages: number;
                    current_page: number;
                    next_page: number | null;
                    previous_page: number | null;
                    records: Array<User>;
                    total_records: number;
                };
            };
        };
    };
    '/users': {
        get: {
            req: GetUsersData;
            res: {
                /**
                 * Users retrieved successfully
                 */
                200: {
                    total_pages: number;
                    current_page: number;
                    next_page: number | null;
                    previous_page: number | null;
                    records: Array<User>;
                    total_records: number;
                };
            };
        };
        post: {
            req: PostUsersData;
            res: {
                /**
                 * User created successfully
                 */
                201: User;
            };
        };
    };
    '/users/{user_id}': {
        get: {
            req: GetUsersByUserIdData;
            res: {
                /**
                 * User retrieved successfully
                 */
                200: User;
            };
        };
        put: {
            req: PutUsersByUserIdData;
            res: {
                /**
                 * User updated successfully
                 */
                200: User;
            };
        };
        delete: {
            req: DeleteUsersByUserIdData;
            res: {
                /**
                 * User deleted successfully
                 */
                200: User;
            };
        };
    };
    '/users/{user_id}/archive': {
        delete: {
            req: DeleteUsersByUserIdArchiveData;
            res: {
                /**
                 * User archived successfully
                 */
                200: User;
            };
        };
    };
    '/groups/search': {
        get: {
            req: GetGroupsSearchData;
            res: {
                /**
                 * Groups retrieved successfully
                 */
                200: {
                    records: Array<Group>;
                    total_records: number;
                    total_pages: number;
                    current_page: number;
                    next_page: number | null;
                    previous_page: number | null;
                };
            };
        };
    };
    '/groups': {
        post: {
            req: PostGroupsData;
            res: {
                /**
                 * Group created successfully
                 */
                201: Group;
            };
        };
    };
    '/groups/{group_id}': {
        get: {
            req: GetGroupsByGroupIdData;
            res: {
                /**
                 * Group retrieved successfully
                 */
                200: Group;
            };
        };
        put: {
            req: PutGroupsByGroupIdData;
            res: {
                /**
                 * Group updated successfully
                 */
                200: Group;
            };
        };
        delete: {
            req: DeleteGroupsByGroupIdData;
            res: {
                /**
                 * Group deleted successfully
                 */
                200: {
                    success: boolean;
                    message: string;
                };
            };
        };
    };
    '/groups/{group_id}/archive': {
        put: {
            req: PutGroupsByGroupIdArchiveData;
            res: {
                /**
                 * Group archived successfully
                 */
                200: Group;
            };
        };
    };
    '/group-members/search': {
        get: {
            req: GetGroupMembersSearchData;
            res: {
                /**
                 * Group members retrieved successfully
                 */
                200: {
                    records: Array<GroupMember>;
                    total_records: number;
                    total_pages: number;
                    current_page: number;
                    next_page: number | null;
                    previous_page: number | null;
                };
            };
        };
    };
    '/group-members': {
        post: {
            req: PostGroupMembersData;
            res: {
                /**
                 * Group member created successfully
                 */
                201: GroupMember;
            };
        };
    };
    '/group-members/{group_member_id}': {
        get: {
            req: GetGroupMembersByGroupMemberIdData;
            res: {
                /**
                 * Group member retrieved successfully
                 */
                200: GroupMember;
            };
        };
        put: {
            req: PutGroupMembersByGroupMemberIdData;
            res: {
                /**
                 * Group member updated successfully
                 */
                200: GroupMember;
            };
        };
        delete: {
            req: DeleteGroupMembersByGroupMemberIdData;
            res: {
                /**
                 * Group member deleted successfully
                 */
                200: {
                    success: boolean;
                    message: string;
                };
            };
        };
    };
    '/group-members/{group_member_id}/archive': {
        put: {
            req: PutGroupMembersByGroupMemberIdArchiveData;
            res: {
                /**
                 * Group member archived successfully
                 */
                200: GroupMember;
            };
        };
    };
    '/group-expenses/search': {
        get: {
            req: GetGroupExpensesSearchData;
            res: {
                /**
                 * Group expenses retrieved successfully
                 */
                200: {
                    records: Array<GroupExpense>;
                    total_records: number;
                    total_pages: number;
                    current_page: number;
                    next_page: number | null;
                    previous_page: number | null;
                };
            };
        };
    };
    '/group-expenses': {
        post: {
            req: PostGroupExpensesData;
            res: {
                /**
                 * Group expense created successfully
                 */
                201: GroupExpense;
            };
        };
    };
    '/group-expenses/{group_expense_id}': {
        get: {
            req: GetGroupExpensesByGroupExpenseIdData;
            res: {
                /**
                 * Group expense retrieved successfully
                 */
                200: GroupExpense;
            };
        };
        put: {
            req: PutGroupExpensesByGroupExpenseIdData;
            res: {
                /**
                 * Group expense updated successfully
                 */
                200: GroupExpense;
            };
        };
        delete: {
            req: DeleteGroupExpensesByGroupExpenseIdData;
            res: {
                /**
                 * Group expense deleted successfully
                 */
                200: {
                    success: boolean;
                    message: string;
                };
            };
        };
    };
    '/group-expenses/{group_expense_id}/archive': {
        put: {
            req: PutGroupExpensesByGroupExpenseIdArchiveData;
            res: {
                /**
                 * Group expense archived successfully
                 */
                200: GroupExpense;
            };
        };
    };
};