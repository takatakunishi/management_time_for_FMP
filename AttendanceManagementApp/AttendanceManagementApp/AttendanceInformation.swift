//
//  AttendanceInformation.swift
//  AttendanceManagementApp
//
//  Created by 工藤海斗 on 2020/07/30.
//  Copyright © 2020 工藤海斗. All rights reserved.
//

import Foundation

struct AttendanceInformation: Codable {
    var name: String
    var owner: Owner
    
    struct Owner: Codable {
        var login: String
        var avatar_url: String
    }
}
