//
//  DecodableDataParse.swift
//  AttendanceManagementApp
//
//  Created by 工藤海斗 on 2020/07/30.
//  Copyright © 2020 工藤海斗. All rights reserved.
//

import Foundation
import APIKit

final class DecodableDataParse : DataParser{
    var contentType: String?{
        return "application/json"
    }
    
    func parse(data: Data) throws -> Any {
        return data
    }
}
