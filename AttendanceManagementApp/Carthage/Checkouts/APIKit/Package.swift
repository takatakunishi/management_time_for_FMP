// swift-tools-version:5.0
import PackageDescription

let package = Package(
    name: "APIKit",
    platforms: [
        .macOS(.v10_10), .iOS(.v8), .tvOS(.v9), .watchOS(.v2)
    ],
    products: [
        .library(name: "APIKit", targets: ["APIKit"]),
    ],
    dependencies: [],
    targets: [
        .target(
            name: "APIKit", 
            dependencies: [],
            exclude: ["BodyParameters/AbstractInputStream.m"]
        ),
         .testTarget(
            name: "APIKitTests",
            dependencies: ["APIKit"]
        ),
    ],
    swiftLanguageVersions: [.v5]
)
